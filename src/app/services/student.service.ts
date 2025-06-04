import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  studentId: string;
  fullName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  course: string;
  bankAccount: string;
  ifsc: string;
  pan: string;
  aadhar: string;
  address: string;
  fatherName: string;
  motherName: string;
  admissionDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = [];
  private studentsSubject = new BehaviorSubject<Student[]>(this.studentList);

  students$ = this.studentsSubject.asObservable();

  constructor() {}

  addStudent(student: Student) {
    this.studentList.push(student);
    this.studentsSubject.next(this.studentList);
  }

  getStudents(): Student[] {
    return this.studentList;
  }

  updateStudent(id: string, updatedData: Partial<Student>) {
    const index = this.studentList.findIndex(s => s.studentId === id);
    if (index !== -1) {
      this.studentList[index] = { ...this.studentList[index], ...updatedData };
      this.studentsSubject.next(this.studentList);
    }
  }

  deleteStudent(id: string) {
    this.studentList = this.studentList.filter(s => s.studentId !== id);
    this.studentsSubject.next(this.studentList);
  }

  getStudentById(id: string): Student | undefined {
    return this.studentList.find(s => s.studentId === id);
  }
}
