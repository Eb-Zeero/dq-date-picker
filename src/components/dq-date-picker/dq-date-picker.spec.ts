import { DqDatePicker } from './dq-date-picker';

describe('dq-date-picker', () => {
  it('builds', () => {
    expect(new DqDatePicker()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns Private string for no names defined with private method', () => {
      const component = new DqDatePicker();
      expect(component.formatPrivate()).toEqual('Private');
    });

    it('formats name with private method', () => {
      const component = new DqDatePicker();
      component.name = 'Joseph';
      expect(component.formatPrivate()).toEqual('Joseph');
    });

    it('returns Public string for no names defined with public method', () => {
        const component = new DqDatePicker();
        expect(component.formatPublic()).toEqual('Public');
    });

    it('formats nameswith private method', () => {
        const component = new DqDatePicker();
        component.name = 'Thomas';
        expect(component.formatPrivate()).toEqual('Thomas');
    });

  });
});
