import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-student',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
deleteForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.deleteForm = this.fb.group({
      studentId: ['', Validators.required]
    });
  }

  deleteStudent() {
    const id = this.deleteForm.get('studentId')?.value;
    const student = this.studentService.getStudentById(id);

    if (student) {
      this.studentService.deleteStudent(id);
      alert('Student deleted successfully!');
      this.deleteForm.reset();
    } else {
      alert('Student not found!');
    }
  }
}
