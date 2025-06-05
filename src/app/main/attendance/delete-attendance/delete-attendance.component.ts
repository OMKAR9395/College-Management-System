import { Component } from '@angular/core';
import { AttendanceService } from '../../../services/attendance/attendance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-attendance',
  imports: [FormsModule],
  templateUrl: './delete-attendance.component.html',
  styleUrl: './delete-attendance.component.css'
})
export class DeleteAttendanceComponent {
 attendanceId = '';

  constructor(private attendanceService: AttendanceService) {}

  delete() {
    this.attendanceService.deleteAttendance(this.attendanceId);
    alert('Attendance record deleted!');
    this.attendanceId = '';
  }
}
