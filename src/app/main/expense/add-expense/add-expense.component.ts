import { Component, NgModule } from '@angular/core';
import { ExpenseService, Expense } from '../../../services/expense.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule,ReactiveFormsModule,RouterModule,FormsModule],
    providers: [ExpenseService],
    standalone: true,
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
expense: Expense = {
    id: '',
    title: '',
    amount: 0,
    category: '',
    date: '',
    note: ''
  };

  constructor(private expenseService: ExpenseService) {}

  onSubmit() {
    this.expenseService.addExpense(this.expense);
    alert('Expense added successfully');
    this.expense = { id: '', title: '', amount: 0, category: '', date: '', note: '' };
  }
}
