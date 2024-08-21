/* 5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
expenses.*/


const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 50, category: 'Entertainment' },
    { amount: 200, category: 'Utilities' },
    { amount: 30, category: 'Groceries' },
    { amount: 75, category: 'Groceries' }
];

const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log('Total Amount:', totalAmount);


/** 
 output:
 Total Amount: 455
 */