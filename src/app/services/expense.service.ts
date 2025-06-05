import { Injectable } from '@angular/core';
export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note: string;
}
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  private expenses: Expense[] = [];
  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }
   getExpenses(): Expense[] {
    return this.expenses;
  }
  updateExpense(id: string, newAmount: number): boolean {
    const index = this.expenses.findIndex(e => e.id === id);
    if (index !== -1) {
      this.expenses[index].amount = newAmount;
      return true;
    }
    return false;
  }

  deleteExpense(id: string): boolean {
    const index = this.expenses.findIndex(e => e.id === id);
    if (index !== -1) {
      this.expenses.splice(index, 1);
      return true;
    }
    return false;
  }
}
