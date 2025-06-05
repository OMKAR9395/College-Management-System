import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

/**Student Module */
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';

/**Teacher Module */
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { DeleteTeacherComponent } from './teacher/delete-teacher/delete-teacher.component';
import { ViewTeacherComponent } from './teacher/view-teacher/view-teacher.component';

/** Staff Module */
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { UpdateStaffComponent } from './staff/update-staff/update-staff.component';
import { DeleteStaffComponent } from './staff/delete-staff/delete-staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';

/**Expense Module */
import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { DeleteExpenseComponent } from './expense/delete-expense/delete-expense.component';
import { ViewExpenseComponent } from './expense/view-expense/view-expense.component';

/**Course Module */
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { DeleteCourseComponent } from './course/delete-course/delete-course.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';

/**User Management Module */
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserManagementComponent } from './user-management/add-user-management/add-user-management.component';
import { UpdateUserManagementComponent } from './user-management/update-user-management/update-user-management.component';
import { DeleteUserManagementComponent } from './user-management/delete-user-management/delete-user-management.component';
import { ViewUserManagementComponent } from './user-management/view-user-management/view-user-management.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddAttendanceComponent } from './attendance/add-attendance/add-attendance.component';
import { UpdateAttendanceComponent } from './attendance/update-attendance/update-attendance.component';
import { DeleteAttendanceComponent } from './attendance/delete-attendance/delete-attendance.component';
import { ViewAttendanceComponent } from './attendance/view-attendance/view-attendance.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      {
      path: 'student',
      component: StudentComponent,
      children: [
                  { path: '', redirectTo: 'add', pathMatch: 'full' },
                  { path: 'add', component: AddStudentComponent },
                  { path: 'update', component: UpdateStudentComponent },
                  { path: 'delete', component: DeleteStudentComponent },
                  { path: 'view', component: ViewStudentComponent }
        ]
      },
      {
      path: 'teacher',
      component: TeacherComponent,
      children: [
              { path: '', redirectTo: 'add', pathMatch: 'full' },
              { path: 'add', component: AddTeacherComponent },
              { path: 'update', component: UpdateTeacherComponent },
              { path: 'delete', component: DeleteTeacherComponent },
              { path: 'view', component: ViewTeacherComponent }
      ] 
      },
       {
      path: 'staff',
      component: StaffComponent,
      children: [
              { path: '', redirectTo: 'add', pathMatch: 'full' },
              { path: 'add', component: AddStaffComponent },
              { path: 'update', component: UpdateStaffComponent },
              { path: 'delete', component: DeleteStaffComponent },
              { path: 'view', component: ViewStaffComponent }
    ]
      },
      {
      path: 'expense',
      component: ExpenseComponent,
      children: [
              { path: '', redirectTo: 'add', pathMatch: 'full' },
              { path: 'add', component: AddExpenseComponent },
              { path: 'update', component: UpdateExpenseComponent },
              { path: 'delete', component: DeleteExpenseComponent },
              { path: 'view', component: ViewExpenseComponent }
    ]
      },
     {
      path: 'course',
      component: CourseComponent,
      children: [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'add', component: AddCourseComponent },
    { path: 'update/:id', component: UpdateCourseComponent },
    { path: 'delete/:id', component: DeleteCourseComponent },
    { path: 'view', component: ViewCourseComponent }
  ]
},
 {
    path: 'user-management',
    component: UserManagementComponent,
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: AddUserManagementComponent },
      { path: 'update', component: UpdateUserManagementComponent },
      { path: 'delete', component: DeleteUserManagementComponent },
      { path: 'view', component: ViewUserManagementComponent },
    ]
  },
   {
    path: 'attendance',
    component: AttendanceComponent,
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: AddAttendanceComponent },
      { path: 'update', component: UpdateAttendanceComponent },
      { path: 'delete', component: DeleteAttendanceComponent },
      { path: 'view', component: ViewAttendanceComponent },
    ]
  }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ViewStudentComponent,

    ExpenseComponent,
    AddExpenseComponent,
    UpdateExpenseComponent,
    DeleteExpenseComponent,
    ViewExpenseComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    UserManagementComponent,
    AddUserManagementComponent,
    UpdateUserManagementComponent,
    ViewUserManagementComponent,
    DeleteUserManagementComponent,
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
