import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should have a Login Button', () => {
    const de = fixture.debugElement.queryAll(By.css('button'));
    const index = de.findIndex(det => det.attributes[`type`] === 'submit');
    expect(index).toBeGreaterThan(-1);
  });
});
