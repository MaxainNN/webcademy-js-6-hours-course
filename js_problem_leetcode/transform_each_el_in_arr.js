/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Define a function called 'map' that takes two parameters: an array
// 'arr' and a callback function 'fn'
var map = function(arr, fn) {
    // Function creates an empty array to store the result of applying
    // the callback function to each element in the input array 
    const transformedArr = [];
    // It loops through each element in the input array 'arr', and for each 
    // element, it calls the callback function 'fn' with two arguments:
    // the element itself and its index in the array. The result of this callback function
    // call is stored in the 'transformedArr' at the same index
    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i],i);
    }
    // After looping through all elements in the input array, the function returns
    // the 'transformedArr' which now contains the transformed elements.
    // The purpose of this function is to apply a given function to each element in the array
    // and return a new array with the tranformed elements.
    return transformedArr;
};

// Input examples
// arr = [1,2,3]
// fn = function plusone(n) { return n + 1; }
// Output : [2,3,4]
