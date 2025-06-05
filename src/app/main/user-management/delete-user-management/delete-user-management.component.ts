import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-delete-user-management',
  imports: [],
  templateUrl: './delete-user-management.component.html',
  styleUrl: './delete-user-management.component.css'
})
export class DeleteUserManagementComponent {
constructor(private userService: UserService) {}

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    alert('User deleted successfully!');
  }
}
