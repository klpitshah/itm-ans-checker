import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatIconModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExamComponent } from './components/exam/exam.component';
import { NotfoundComponent} from './components/notfound/notfound.component'

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { TestService } from './services/test.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard} from './guards/auth.guard';
import { StudentGuard} from './guards/student.guard';
import { AdminGuard} from './guards/admin.guard';
import { ProfessorGuard} from './guards/professor.guard';
import { RegisterProfessorComponent } from './components/register-professor/register-professor.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CreatetestComponent } from './components/createtest/createtest.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[AdminGuard]},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}, //registerprofessor
  {path:'registerprofessor', component: RegisterProfessorComponent, canActivate:[AdminGuard]},
  {path:'changepass', component: ChangepasswordComponent, canActivate:[AuthGuard]},
  {path:'forgetpass', component: ForgetpasswordComponent},
  {path:'exam', component: ExamComponent, canActivate:[StudentGuard]},
  {path:'createtest', component: CreatetestComponent, canActivate:[ProfessorGuard]}, 
  {path:'permissiondenied', component: PermissionDeniedComponent}, 
  {path:'**', component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ExamComponent,
    RegisterProfessorComponent,
    ChangepasswordComponent,
    CreatetestComponent,
    ForgetpasswordComponent,
    SpinnerComponent,
    NotfoundComponent,
    PermissionDeniedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    CdkStepperModule,
    MatStepperModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    AdminGuard,
    StudentGuard,
    ProfessorGuard,
    TestService,
    MatDatepickerModule,
    MatInputModule,
    MatExpansionModule,
    CdkStepperModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
