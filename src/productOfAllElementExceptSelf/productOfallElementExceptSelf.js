const calculatePrefixProducts = (arr) => {
    const prefixProducts = new Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        prefixProducts[i] = prefixProducts[i - 1] * arr[i - 1];
    }
    return prefixProducts;
}

const calculateSuffixProducts = (arr) => {
    const suffixProducts = new Array(arr.length).fill(1);
    let suffixProduct = 1;
    for (let j = arr.length - 2; j >= 0; j--) {
        suffixProduct *= arr[j + 1];
        suffixProducts[j] = suffixProduct;
    }
    return suffixProducts;
}

const productOfAllElementExceptSelf = (arr) => {
    const prefixProducts = calculatePrefixProducts(arr);
    const suffixProducts = calculateSuffixProducts(arr);
    const result = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        result[i] = prefixProducts[i] * suffixProducts[i];
    }

    return result;
}

const main = () => {
    console.log(productOfAllElementExceptSelf([1, 2, 3, 4]));
}

module.exports = { productOfAllElementExceptSelf, calculateSuffixProducts, calculatePrefixProducts };