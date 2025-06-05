import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-update-user-management',
  imports: [FormsModule],
  templateUrl: './update-user-management.component.html',
  styleUrl: './update-user-management.component.css'
})
export class UpdateUserManagementComponent implements OnInit {
 user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
  }

  updateUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user);
      alert('User updated successfully!');
    }
  }
}
