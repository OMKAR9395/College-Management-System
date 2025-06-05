import { Component } from '@angular/core';
import { Attendance } from '../attendance.model';
import { AttendanceService } from '../../../services/attendance/attendance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-attendance',
  imports: [FormsModule],
  templateUrl: './add-attendance.component.html',
  styleUrl: './add-attendance.component.css'
})
export class AddAttendanceComponent {
 attendance: Attendance = {
    id: '',
    studentName: '',
    date: '',
    status: 'Present',
    remarks: ''
  };

  constructor(private attendanceService: AttendanceService) {}

  addAttendance() {
    this.attendanceService.addAttendance({ ...this.attendance });
    alert('Attendance added!');
    this.attendance = {
      id: '',
      studentName: '',
      date: '',
      status: 'Present',
      remarks: ''
    };
  }
}
