import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [HeaderComponent],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Brand Title', () => {
    const de = fixture.debugElement.query(By.css('.navbar-brand'));
    const el = de.attributes[`class`] === 'navbar-brand';
    expect(el).toBeDefined();
  });

  it('should have a link to Recipe page', () => {
    const de = fixture.debugElement.queryAll(By.css('a'));
    const index = de.findIndex(det => det.properties[`href`] === '/recipes');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to Login page', () => {
    const de = fixture.debugElement.queryAll(By.css('a'));
    const index = de.findIndex(det => det.properties[`href`] === '/login');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to Sign Up page', () => {
    const de = fixture.debugElement.queryAll(By.css('a'));
    const index = de.findIndex(det => det.properties[`href`] === '/signup');
    expect(index).toBeGreaterThan(-1);
  });

});
