import { Component } from '@angular/core';
import { ExpenseService, Expense } from '../../../services/expense.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-expense',
  imports: [NgFor,NgIf],
  templateUrl: './view-expense.component.html',
  styleUrl: './view-expense.component.css'
})
export class ViewExpenseComponent {
 expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses();
  }
}
