import { Component,OnInit } from '@angular/core';
import { StudentService, Student } from '../../../services/student.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-student',
  imports: [NgFor],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {
students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}
