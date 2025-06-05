import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-user-management',
  imports: [FormsModule],
  templateUrl: './update-user-management.component.html',
  styleUrl: './update-user-management.component.css'
})
export class UpdateUserManagementComponent  {
 userId = '';
  newEmail = '';
  newRole = '';

  constructor(private userService: UserService) {}

  updateUser() {
    // You may want to fetch the existing user details to prefill these fields
    const updatedUser = {
      id: this.userId,
      email: this.newEmail,
      role: this.newRole,
      username: '', // Set or fetch the username
      phone: '',    // Set or fetch the phone
      address: '',  // Set or fetch the address
      password: ''  // Set or fetch the password
    };
    this.userService.updateUser(this.userId, this.newEmail, this.newRole, updatedUser);
  }
}
