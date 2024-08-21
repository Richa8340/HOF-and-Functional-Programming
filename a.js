/**  You are building an e-commerce website.Write a function that calculates the total price of a customer's order
You're given an array of items, each with a price property , Use the forEach method to iterate through the array and 
sum up the prices to get the total order amount  */


function calculateTotalPrice(items) {
    let totalPrice = 0;
    
    items.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}


const orderItems = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 50 },
    { name: 'Keyboard', price: 80 }
];

const total = calculateTotalPrice(orderItems);
console.log('Total Order Price:', total);  // Output: Total Order Price: 1130

