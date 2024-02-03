import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lecturesListComponent } from './components/lectures-list/lecture-list.component';
import { lectureDetailsComponent } from './components/lecture-details/lecture-details.component';
import { AddlectureComponent } from './components/add-lecture/add-lecture.component';

const routes: Routes = [
  { path: '', redirectTo: 'lectures', pathMatch: 'full' },
  { path: 'lectures', component: lecturesListComponent },
  { path: 'lectures/:id', component: lectureDetailsComponent },
  { path: 'add', component: AddlectureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }