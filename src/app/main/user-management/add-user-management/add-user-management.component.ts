import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserManagementComponent } from '../user-management.component';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user-management',
  imports: [FormsModule],
  templateUrl: './add-user-management.component.html',
  styleUrl: './add-user-management.component.css'
})
export class AddUserManagementComponent {
 newUser: User = { id: 0, username: '', password: '', role: 'Student' };

  constructor(private userService: UserService) {}

  addUser(): void {
    this.userService.addUser(this.newUser);
    alert('User added successfully!');
  }
}
