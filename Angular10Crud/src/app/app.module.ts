import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactadvisingComponent} from './components/contactadvising/contactadvising.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    DashboardComponent,
    DropdownsComponent,
    ContactadvisingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
