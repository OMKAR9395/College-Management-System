import { Component, NgModule } from '@angular/core';
import { ExpenseService, Expense } from '../../../services/expense.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update-expense',
  imports: [FormsModule],
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.css'
})
export class UpdateExpenseComponent {
 expenseId: string = '';
  newAmount: number = 0;

  constructor(private expenseService: ExpenseService) {}

  onUpdate() {
    const updated = this.expenseService.updateExpense(this.expenseId, this.newAmount);
    if (updated) {
      alert('Expense updated successfully');
    } else {
      alert('Expense ID not found');
    }
    this.expenseId = '';
    this.newAmount = 0;
  }
}
