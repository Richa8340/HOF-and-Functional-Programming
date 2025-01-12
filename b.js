/** 2
In this challenge, your task is to create a function that generates a random number and prints it to the
console every 2 seconds.The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.  */


function printRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.random(); // Generates a random number between 0 and 1
        console.log(randomNumber);
    }, 2000); // 2000 milliseconds = 2 seconds
}

printRandomNumber();
