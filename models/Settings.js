const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: 'Nile Dose Cafe'
  },
  siteNameAr: {
    type: String,
    default: 'كافيه النيل دوز'
  },
  logo: {
    type: String,
    default: '/images/logo.png'
  },
  primaryColor: {
    type: String,
    default: '#0077b6'
  },
  secondaryColor: {
    type: String,
    default: '#e9c46a'
  },
  address: {
    type: String,
    default: 'Riyadh, Saudi Arabia'
  },
  addressAr: {
    type: String,
    default: 'الرياض، المملكة العربية السعودية'
  },
  phone: {
    type: String,
    default: '+966 XX XXX XXXX'
  },
  email: {
    type: String,
    default: 'info@niledosecafe.com'
  },
  openingHours: {
    type: String,
    default: 'Daily: 7:00 AM - 12:00 AM'
  },
  openingHoursAr: {
    type: String,
    default: 'يوميًا: 7:00 صباحًا - 12:00 منتصف الليل'
  },
  instagram: {
    type: String,
    default: 'https://www.instagram.com/niledose_cafe'
  },
  facebook: {
    type: String,
    default: '#'
  },
  twitter: {
    type: String,
    default: '#'
  },
  snapchat: {
    type: String,
    default: '#'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Settings', SettingsSchema);
