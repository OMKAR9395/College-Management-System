import { Component ,NgModule,OnInit} from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [StudentService],
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      bankAccount: ['', Validators.required],
      ifsc: [''],
      pan: [''],
      aadhar: ['', Validators.required],
      address: [''],
      fatherName: [''],
      motherName: [''],
      admissionDate: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value);
      alert('Student added successfully!');
      this.studentForm.reset();
    } else {
      alert('Please fill all required fields correctly!');
    }
  }
}
