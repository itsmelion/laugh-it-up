import { triggerPin } from './triggerPin.services';

describe('Trigger Pin ', () => {
  it('should work', async () => {
    const response = await triggerPin({
      user_id: 'SOME_UUID',
      country: 'NL',
      msisdn: '+31682135435',
    });

    expect(response?.success).toEqual(true);
  });
});
