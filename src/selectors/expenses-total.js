export default (expensesList) => {
    return expensesList
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};