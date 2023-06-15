import { triggerPin } from './triggerPin.services';

describe('services', () => {
  it('should work', () => {
    expect(triggerPin({ msisdn: '+316666666' })).toEqual('ok');
  });
});
