import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../user.model';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-user-management',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './view-user-management.component.html',
  styleUrl: './view-user-management.component.css'
})
export class ViewUserManagementComponent  implements OnInit{
 users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
