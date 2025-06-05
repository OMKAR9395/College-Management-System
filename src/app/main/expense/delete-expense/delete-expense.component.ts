import { Component } from '@angular/core';
import { ExpenseService, Expense } from '../../../services/expense.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-delete-expense',
  imports: [FormsModule],
  templateUrl: './delete-expense.component.html',
  styleUrl: './delete-expense.component.css'
})
export class DeleteExpenseComponent {
expenseId: string = '';

  constructor(private expenseService: ExpenseService) {}

  onDelete() {
    const deleted = this.expenseService.deleteExpense(this.expenseId);
    if (deleted) {
      alert('Expense deleted successfully');
    } else {
      alert('Expense ID not found');
    }
    this.expenseId = '';
  }
}
