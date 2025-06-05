import { Injectable } from '@angular/core';
import { Course } from '../main/course/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

private courses: Course[] = [
    {
      id: 1,
      name: 'Computer Science',
      duration: '3 years',
      description: 'BSc in Computer Science',
      fees: 50000
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      duration: '4 years',
      description: 'BTech in Mechanical',
      fees: 75000
    }
  ];

  constructor() {}

  // ✅ View all courses
  getCourses(): Course[] {
    return this.courses;
  }

  // ✅ Get course by ID
  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  // ✅ Add new course
  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // ✅ Update existing course
  updateCourse(updatedCourse: Course): void {
    const index = this.courses.findIndex(course => course.id === updatedCourse.id);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  // ✅ Delete course by ID
  deleteCourse(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
