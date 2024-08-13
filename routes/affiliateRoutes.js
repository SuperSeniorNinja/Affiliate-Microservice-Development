const express = require('express');
const Affiliate = require('../models/Affiliate');
const router = express.Router();

// POST /affiliate
router.post('/affiliate', async (req, res) => {    
    try {
      // Validate request body
      console.log(req.body);
      if (!req.body.affiliateId || !req.body.referredEmail) {
        return res.status(400).json({ error: 'affiliateId and referredEmail are required' });
      }
  
      // Generate a unique affiliate code
      const affiliateCode = await generateUniqueAffiliateCode();
  
      const affiliate = new Affiliate({
        affiliateId: req.body.affiliateId,
        affiliateCode,
        referredUserId: req.body.referredEmail,
        commission: req.body.commission ? req.body.commission: 0.5
      });
  
      await affiliate.save();
  
      res.status(201).json(affiliate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

// Helper function to generate a unique affiliate code
async function generateUniqueAffiliateCode() {
    let code;
    let isUnique = false;
  
    while (!isUnique) {
      code = Math.random().toString(36).substring(2, 8).toUpperCase();
      const existing = await Affiliate.findOne({ affiliateCode: code });
      isUnique = !existing;
    }
  
    return code;
}

module.exports = router;