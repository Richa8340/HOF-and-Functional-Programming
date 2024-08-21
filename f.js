/**  6. You have a list of expenses, each with an amount and a category. Now, create a function named
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
called categorizedExpenses, where each element represents the category for the corresponding expense in
the original list. Finally, print out the categorizedExpenses array.   */


const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 50, category: 'Entertainment' },
    { amount: 200, category: 'Utilities' },
    { amount: 30, category: 'Groceries' },
    { amount: 75, category: 'Groceries' }
];

function categorizeExpense(amount) {
    return amount > 100 ? 'High Expense' : 'Low Expense';
}

const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

console.log(categorizedExpenses);



/** output:  
 
  'Low Expense',
  'Low Expense',
  'High Expense',
  'Low Expense',
  'Low Expense'
 */
