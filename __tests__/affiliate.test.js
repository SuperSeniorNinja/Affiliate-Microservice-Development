const Affiliate = require('../models/Affiliate');

describe('Affiliate Service',  () => {
  test('Create a new affiliate', async () => {
  
    const affiliate = new Affiliate({
        affiliateId: 'John Doe(Unit Test)',
        affiliateCode: 'TEST999',
        referredUserId: 'john.test@example.com',
        commission: '0.8'
    });
  
    await affiliate.save();

    expect(createdAffiliate.id).toBeDefined();
    expect(createdAffiliate.affiliateId).toBe(affiliate.affiliateId);
    expect(createdAffiliate.referredEmail).toBe(affiliate.referredEmail);
    expect(createdAffiliate.commission).toBe(affiliate.commission);
  });

});