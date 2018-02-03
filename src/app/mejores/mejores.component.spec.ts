import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresComponent } from './mejores.component';

describe('MejoresComponent', () => {
  let component: MejoresComponent;
  let fixture: ComponentFixture<MejoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
