/**  7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of
each number. After completing the iteration, display the modified array.   */

const originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2;
});

console.log(originalNumbers);

// output: [ 4, 10, 16, 20, 6 ]
