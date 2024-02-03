import { Component, OnInit } from '@angular/core';
import { lecture } from 'src/app/models/lecture.model';
import { lectureService } from 'src/app/services/lecture.service';

@Component({
  selector: 'app-lectures-list',
  templateUrl: './lectures-list.component.html',
  styleUrls: ['./lectures-list.component.css']
})
export class lecturesListComponent implements OnInit {

  lectures?: lecture[];
  currentlecture: lecture = {};
  currentIndex = -1;
  title = '';

  constructor(private lectureService: lectureService) { }

  ngOnInit(): void {
    this.retrievelectures();
  }

  retrievelectures(): void {
    this.lectureService.getAll()
      .subscribe({
        next: (data) => {
          this.lectures = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievelectures();
    this.currentlecture = {};
    this.currentIndex = -1;
  }

  setActivelecture(lecture: lecture, index: number): void {
    this.currentlecture = lecture;
    this.currentIndex = index;
  }

  removeAlllectures(): void {
    this.lectureService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentlecture = {};
    this.currentIndex = -1;

    this.lectureService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.lectures = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}