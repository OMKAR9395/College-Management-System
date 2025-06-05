import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { Course } from '../course.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-course',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent implements OnInit{
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

  updateCourse() {
    if (this.course) {
      this.courseService.updateCourse(this.course);
      this.router.navigate(['/main/course/view']);
    }
  }
}
