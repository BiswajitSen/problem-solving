const { productOfAllElementExceptSelf, calculateSuffixProducts, calculatePrefixProducts } = require('../../productOfAllElementExceptSelf/productOfAllElementExceptSelf');

test('productOfAllElementExceptSelf with [1, 2, 3, 4]', () => {
    expect(productOfAllElementExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('productOfAllElementExceptSelf with [2, 3, 4, 5]', () => {
    expect(productOfAllElementExceptSelf([2, 3, 4, 5])).toEqual([60, 40, 30, 24]);
});

test('productOfAllElementExceptSelf with [1, 1, 1, 1]', () => {
    expect(productOfAllElementExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
});

test('productOfAllElementExceptSelf with [0, 1, 2, 3]', () => {
    expect(productOfAllElementExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
});

test('productOfAllElementExceptSelf with [1, 2, 0, 4]', () => {
    expect(productOfAllElementExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
});

test('calculatePrefixProducts with [1, 2, 3, 4]', () => {
    expect(calculatePrefixProducts([1, 2, 3, 4])).toEqual([1, 1, 2, 6]);
});

test('calculatePrefixProducts with [2, 3, 4, 5]', () => {
    expect(calculatePrefixProducts([2, 3, 4, 5])).toEqual([1, 2, 6, 24]);
});

test('calculateSuffixProducts with [1, 2, 3, 4]', () => {
    expect(calculateSuffixProducts([1, 2, 3, 4])).toEqual([24, 12, 4, 1]);
});

test('calculateSuffixProducts with [2, 3, 4, 5]', () => {
    expect(calculateSuffixProducts([2, 3, 4, 5])).toEqual([60, 20, 5, 1]);
});