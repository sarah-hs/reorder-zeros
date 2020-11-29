const reorderZeros = require('../exercise');

describe('No digit items in the array', () => {
  test("Should ignore 'TEST'", () => {
    expect(reorderZeros([1, 0, 2, 'TEST', 0, 3])).toStrictEqual([1, 2, 3, 0, 0]);
  });

  test("Should ignore 'ABC', 'DEF' and 'XYZ'", () => {
    expect(reorderZeros([1, 'ABC', 0, 2, 'DEF', 0, 3, 'XYZ'])).toStrictEqual([1, 2, 3, 0, 0]);
  });
});
