const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
  affiliateId: { type: String, required: true },
  affiliateCode: { type: String, required: true, unique: true },
  referredUserId: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Canceled', 'Completed', 'Paid Out'], default: 'Pending' },
  commission: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Affiliate', affiliateSchema);