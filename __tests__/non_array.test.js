const reorderZeros = require('../exercise');

describe('No aray passed to the function', () => {
  test('String as argument', () => {
    expect(reorderZeros("This is not an array")).toStrictEqual([]);
  });

  test('Object as argument', () => {
    expect(reorderZeros({1: '1', 2: '2', 0: '0'})).toStrictEqual([]);
  });
});
