import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../services/attendance/attendance.service';
import { Attendance } from '../attendance.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-attendance',
  imports: [NgFor],
  templateUrl: './view-attendance.component.html',
  styleUrl: './view-attendance.component.css'
})
export class ViewAttendanceComponent implements OnInit {
records: Attendance[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.records = this.attendanceService.getAllAttendance();
  }
}
