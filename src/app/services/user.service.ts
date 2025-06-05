import { Injectable } from '@angular/core';
import { User } from '../main/user-management/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(id: string, newEmail: string, newRole: string, updatedUser: User) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) this.users[index] = updatedUser;
  }

  deleteUser(id: string) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
