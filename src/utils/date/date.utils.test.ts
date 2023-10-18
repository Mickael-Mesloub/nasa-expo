import { formatDateHyphenUK } from './date.utils';

describe('format date to UK with hyphen', () => {
  it('should return a date as a string on format YYYY-MM-DD', () => {
    const result = formatDateHyphenUK(new Date('2023-10-18'));
    const expected = '2023-10-18';
    expect(result).toBe(expected);
  });
});
