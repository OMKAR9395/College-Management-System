import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
 student = {
    id: '',
    date: '',
    bankAccount: '',
    note: '',
    name: '',
    aadhar: '',
    pan: ''
  };

  onSubmit() {
    console.log('Student added:', this.student);
    alert('Student added successfully!');
  }
}
