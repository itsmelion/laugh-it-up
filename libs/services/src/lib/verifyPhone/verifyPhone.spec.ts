import { verifyPhone } from './verifyPhone.services';

describe('services', () => {
  it('should work', () => {
    expect(verifyPhone('+316666666')).toEqual('ok');
  });
});
