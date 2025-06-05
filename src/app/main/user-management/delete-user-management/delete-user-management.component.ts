import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-user-management',
  imports: [FormsModule],
  templateUrl: './delete-user-management.component.html',
  styleUrl: './delete-user-management.component.css'
})
export class DeleteUserManagementComponent {
  userId = '';

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userService.deleteUser(this.userId);
  }
}
