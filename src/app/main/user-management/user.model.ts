export interface User {
  id: number;
  username: string;
  password: string;
  role: 'Admin' | 'Staff' | 'Student'; // Define roles
}
