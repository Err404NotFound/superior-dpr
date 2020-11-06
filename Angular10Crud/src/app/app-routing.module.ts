import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'courses', component: CourseListComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'dropdowns', component: DropdownsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
