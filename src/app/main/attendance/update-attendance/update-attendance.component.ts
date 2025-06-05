import { Component } from '@angular/core';
import { Attendance } from '../attendance.model';
import { AttendanceService } from '../../../services/attendance/attendance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-attendance',
  imports: [FormsModule],
  templateUrl: './update-attendance.component.html',
  styleUrl: './update-attendance.component.css'
})
export class UpdateAttendanceComponent {
 attendance: Attendance = {
    id: '',
    studentName: '',
    date: '',
    status: 'Present',
    remarks: ''
  };

  constructor(private attendanceService: AttendanceService) {}

  update() {
    this.attendanceService.updateAttendance(this.attendance.id, { ...this.attendance });
    alert('Attendance updated!');
  }
}
