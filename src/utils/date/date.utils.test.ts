import { formatDateHyphenUK } from './date.utils';

describe('formatDateHyphenUK', () => {
  it('should return a date formatted with hyphen', () => {
    const result = formatDateHyphenUK(new Date('2023-10-18'));
    const expected = '2023-10-18';
    expect(result).toEqual(expected);
  });
});
