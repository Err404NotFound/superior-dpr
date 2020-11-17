import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactadvisingComponent } from './contactadvising.component';

describe('ContactadvisingComponent', () => {
  let component: ContactadvisingComponent;
  let fixture: ComponentFixture<ContactadvisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactadvisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactadvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
