export interface Attendance {
  id: string;
  studentName: string;
  date: string;
  status: 'Present' | 'Absent';
  remarks?: string;
}
