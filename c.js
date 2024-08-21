/** 3. You are given an array of expense objects representing monthly expenses. Each object has properties,
amount and category. Use the map method to create a new array that includes the calculated tax for each
expense. Assume a tax rate of 10%. */

const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 50, category: 'Entertainment' },
    { amount: 200, category: 'Utilities' }
];

const taxRate = 0.10; // 10% tax rate

const expensesWithTax = expenses.map(expense => {
    return {
        ...expense,
        tax: expense.amount * taxRate
    };
});

console.log(expensesWithTax);

/**   output:  
  { amount: 100, category: 'Food', tax: 10 },
  { amount: 50, category: 'Entertainment', tax: 5 },
  { amount: 200, category: 'Utilities', tax
 */
