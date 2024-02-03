import { Component } from '@angular/core';
import { lecture } from 'src/app/models/lecture.model';
import { lectureService } from 'src/app/services/lecture.service';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddlectureComponent {

  lecture: lecture = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private lectureService: lectureService) { }

  savelecture(): void {
    const data = {
      title: this.lecture.title,
      description: this.lecture.description
    };

    this.lectureService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newlecture(): void {
    this.submitted = false;
    this.lecture = {
      title: '',
      description: '',
      published: false
    };
  }

}