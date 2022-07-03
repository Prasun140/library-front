import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {SignupStudentComponent} from './pages/signup-student/signup-student.component'
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AddLendingComponent } from './pages/add-lending/add-lending.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',

  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',

  },
  {
    path: 'signup-student',
    component: SignupStudentComponent,
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'student-dash',
    component: StudentDashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin-dash',
    component: AdminDashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-lending',
    component: AddLendingComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
