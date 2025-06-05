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
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
