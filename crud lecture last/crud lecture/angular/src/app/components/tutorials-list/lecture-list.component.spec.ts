import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lecturesListComponent } from './lectures-list.component';

describe('lecturesListComponent', () => {
  let component: lecturesListComponent;
  let fixture: ComponentFixture<lecturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ lecturesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(lecturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
