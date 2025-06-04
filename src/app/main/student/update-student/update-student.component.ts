import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-student',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent{

}
