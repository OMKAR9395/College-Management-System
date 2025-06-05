import { Injectable } from '@angular/core';
import { Attendance } from '../../main/attendance/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

private attendanceRecords: Attendance[] = [];

  addAttendance(record: Attendance) {
    this.attendanceRecords.push(record);
  }

  updateAttendance(id: string, newRecord: Attendance) {
    const index = this.attendanceRecords.findIndex(r => r.id === id);
    if (index > -1) this.attendanceRecords[index] = newRecord;
  }

  deleteAttendance(id: string) {
    this.attendanceRecords = this.attendanceRecords.filter(r => r.id !== id);
  }

  getAllAttendance(): Attendance[] {
    return [...this.attendanceRecords];
  }}
