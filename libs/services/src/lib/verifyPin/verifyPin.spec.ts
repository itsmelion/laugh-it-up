import { verifyPin } from './verifyPin.services';

describe('services', () => {
  it('should work', () => {
    expect(verifyPin('+316666666')).toEqual('ok');
  });
});
