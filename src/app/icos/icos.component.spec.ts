import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICOsComponent } from './icos.component';

describe('IcosComponent', () => {
  let component: ICOsComponent;
  let fixture: ComponentFixture<ICOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
