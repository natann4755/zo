import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadegirComponent } from './headegir.component';

describe('HeadegirComponent', () => {
  let component: HeadegirComponent;
  let fixture: ComponentFixture<HeadegirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadegirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
