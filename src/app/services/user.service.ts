import { Injectable } from '@angular/core';
import { User } from '../main/user-management/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private users: User[] = [
    { id: 1, username: 'admin', password: 'admin123', role: 'Admin' },
    { id: 2, username: 'staff1', password: 'staff123', role: 'Staff' },
    { id: 3, username: 'student1', password: 'student123', role: 'Student' }
  ];

  // Get all users
  getUsers(): User[] {
    return [...this.users]; // Returning a copy to avoid direct mutation
  }

  // Get a specific user by ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Add a new user
  addUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  // Update user details
  updateUser(id: number, updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser, id }; // Ensure ID remains unchanged
    }
  }

  // Delete a user
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
