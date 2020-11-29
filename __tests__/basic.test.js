const reorderZeros = require('../exercise');

describe('Basic functionality', () => {
  test('Should send zeros from the beginning to the end', () => {
    expect(reorderZeros([0, 0, 1, 2, 3])).toStrictEqual([1, 2, 3, 0, 0]);
  });

  test('Should send zeros from the middle to the end', () => {
    expect(reorderZeros([1, 2, 3, 0, 0, 0, 5, 6])).toStrictEqual([1, 2, 3, 5, 6, 0, 0, 0]);
  });

  test('Should not move the zeros on the end', () => {
    expect(reorderZeros([1, 2, 3, 0, 0])).toStrictEqual([1, 2, 3, 0, 0]);
  });

  test('Should send zeros on any position to the end', () => {
    expect(reorderZeros([0, 1, 0, 2, 0, 3, 0, 0, 5, 6, 0])).toStrictEqual([1, 2, 3, 5, 6, 0, 0, 0, 0, 0, 0]);
  });

  test('Should return the same', () => {
    expect(reorderZeros([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

  test('Should return the empty array', () => {
    expect(reorderZeros([])).toStrictEqual([]);
  });
});
