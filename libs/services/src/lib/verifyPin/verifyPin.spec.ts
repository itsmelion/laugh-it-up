import { verifyPin } from './verifyPin.services';

describe('Verify Pin ', () => {
  it('should work', async () => {
    const response = await verifyPin({
      user_id: 'SOME_UUID',
      country: 'NL',
      pin: 8888,
    });

    expect(response?.success).toEqual(true);
  });
});
