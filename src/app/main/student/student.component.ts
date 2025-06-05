import { Component } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
