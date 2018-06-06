import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeemedComponent } from './deemed.component';

describe('DeemedComponent', () => {
  let component: DeemedComponent;
  let fixture: ComponentFixture<DeemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
