import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortInfoVideoComponent } from './short-info-video.component';

describe('ShortInfoVideoComponent', () => {
  let component: ShortInfoVideoComponent;
  let fixture: ComponentFixture<ShortInfoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortInfoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortInfoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
