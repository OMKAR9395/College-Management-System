import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
   course: Course = {
    id: 0,
    name: '',
    duration: '',
    description: '',
    fees: 0
  };

  constructor(private courseService: CourseService, private router: Router) {}

  addCourse() {
    // Generate unique id (for example)
    this.course.id = new Date().getTime();

    this.courseService.addCourse(this.course);
    this.router.navigate(['/main/course/view']);
  }
}
