import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydiscComponent } from './mydisc.component';

describe('MydiscComponent', () => {
  let component: MydiscComponent;
  let fixture: ComponentFixture<MydiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
