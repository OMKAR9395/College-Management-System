import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserManagementComponent } from '../user-management.component';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user-management',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-user-management.component.html',
  styleUrl: './add-user-management.component.css'
})
export class AddUserManagementComponent {
 userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.addUser(user);
      alert('User added successfully');
      this.userForm.reset();
    }
  }
}
