import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-course',
  imports: [NgFor],
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent {
courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  navigateToUpdate(id: number) {
    this.router.navigate(['/main/course/update', id]);
  }

  navigateToDelete(id: number) {
    this.router.navigate(['/main/course/delete', id]);
  }

  navigateToAdd() {
    this.router.navigate(['/main/course/add']);
  }

}
