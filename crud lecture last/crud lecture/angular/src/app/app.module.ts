import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlectureComponent } from './components/add-lecture/add-lecture.component';
import { lectureDetailsComponent } from './components/lecture-details/lecture-details.component';
import { lecturesListComponent } from './components/lectures-list/lecture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddlectureComponent,
    lectureDetailsComponent,
    lecturesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
