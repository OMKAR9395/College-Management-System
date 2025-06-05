import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../user.model';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-user-management',
  imports: [NgIf,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './view-user-management.component.html',
  styleUrl: './view-user-management.component.css'
})
export class ViewUserManagementComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.loadUsers(); // Refresh the list
  }
}
