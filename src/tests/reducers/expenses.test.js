import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(2);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test("shouldn't remove expense by id which does not exist", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "id"
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(3);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    };
    const state = expensesReducer([expenses[0], expenses[1]], action);
    expect(state.length).toBe(3);
    expect(state).toEqual(expenses);
});

test("should edit an expense", () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: "test"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toEqual('test');
});

test('should not edit an expense which does not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'not existing expense id value',
        updates: {
            descripiton: 'test'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

