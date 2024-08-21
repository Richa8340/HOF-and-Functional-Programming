/* 4. Using the same array of expense objects, use the filter method to create a new array that includes only
the expenses related to the category "Groceries."    */


const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 50, category: 'Entertainment' },
    { amount: 200, category: 'Utilities' },
    { amount: 30, category: 'Groceries' },
    { amount: 75, category: 'Groceries' }
];

const groceriesExpenses = expenses.filter(expense => expense.category === 'Groceries');

console.log(groceriesExpenses);


/*  output:
 { amount: 30, category: 'Groceries' },
  { amount: 75, category: 'Groceries' }
 */