import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
})
export class UpdateStudentComponent {
  updateForm: FormGroup;
  studentFound = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.updateForm = this.fb.group({
      studentId: ['', Validators.required],
      phone: [''],
      email: [''],
      address: ['']
    });
  }

  searchStudent() {
    const id = this.updateForm.get('studentId')?.value;
    const student = this.studentService.getStudentById(id);
    if (student) {
      this.studentFound = true;
      this.updateForm.patchValue({
        phone: student.phone,
        email: student.email,
        address: student.address
      });
    } else {
      this.studentFound = false;
      alert('Student not found!');
    }
  }

  updateStudent() {
    if (this.updateForm.valid) {
      const id = this.updateForm.get('studentId')?.value;
      const updatedData = {
        phone: this.updateForm.get('phone')?.value,
        email: this.updateForm.get('email')?.value,
        address: this.updateForm.get('address')?.value
      };
      this.studentService.updateStudent(id, updatedData);
      alert('Student updated successfully!');
      this.updateForm.reset();
      this.studentFound = false;
    }
  }
}
