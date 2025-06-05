import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-delete-course',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './delete-course.component.html',
  styleUrl: './delete-course.component.css'
})
export class DeleteCourseComponent {
course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourseById(id);

    if (!this.course) {
      alert('Course not found!');
      this.router.navigate(['/main/course/view']);
    }
  }

  deleteCourse() {
    if (this.course) {
      this.courseService.deleteCourse(this.course.id);
      this.router.navigate(['/main/course/view']);
    }
  }

  cancel() {
    this.router.navigate(['/main/course/view']);
  }
}
