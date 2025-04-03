const path = require('path');
const fs = require('fs');

// @desc    Upload file
// @route   POST /api/upload
// @access  Private
exports.uploadFile = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ success: false, message: 'No files were uploaded' });
    }
    
    const file = req.files.file;
    
    // Check file type
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const extname = fileTypes.test(path.extname(file.name).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    
    if (!extname || !mimetype) {
      return res.status(400).json({ success: false, message: 'Please upload an image file' });
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return res.status(400).json({ success: false, message: 'File size should be less than 5MB' });
    }
    
    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    // Generate unique filename
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const uploadPath = path.join(uploadDir, fileName);
    
    // Move file to uploads directory
    file.mv(uploadPath, err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'File upload failed' });
      }
      
      res.status(200).json({
        success: true,
        fileName,
        filePath: `/uploads/${fileName}`
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
