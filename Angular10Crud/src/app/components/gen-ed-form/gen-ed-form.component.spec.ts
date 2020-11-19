import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEdFormComponent } from './gen-ed-form.component';

describe('GenEdFormComponent', () => {
  let component: GenEdFormComponent;
  let fixture: ComponentFixture<GenEdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenEdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
