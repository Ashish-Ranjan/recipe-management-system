import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [SignupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a Input for full Name', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'fullName');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Input for User Name', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'userName');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Input for Password', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'password');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Input for Confirm Password', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'passwordReenter');
    expect(index).toBeGreaterThan(-1);
  });
});
