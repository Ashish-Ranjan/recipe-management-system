import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should authenticate login user', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.authenticateloginUser('test@test.com', 'test')).toBeTruthy();
  });

  it('should authenticate user', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.getUserName()).toBeNull();
    expect(service.setUserData('test@test.com')).toBeUndefined();
    expect(service.isUserLoggedOut()).toBeUndefined();
  });

  it('should sign Up user', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.signUpUser({})).toBeTruthy();
  });
});
