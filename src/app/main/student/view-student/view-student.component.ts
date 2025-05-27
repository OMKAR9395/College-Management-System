import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-student',
  imports: [NgFor],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent {
 students = [
    { id: 1, name: 'Omkar', aadhar: '123456789012', pan: 'ABCDE1234F' },
    { id: 2, name: 'Test', aadhar: '111122223333', pan: 'WXYZ5678G' }
  ];
}
