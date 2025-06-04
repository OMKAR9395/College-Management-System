import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private students: any[] = [];

  addStudent(student: any) {
    this.students.push(student);
    console.log('Student added:', student);
  }

  getStudents() {
    return this.students;
  }
  
}
