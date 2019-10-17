import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private location: Location) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isUserLoggedIn()) {
            this.location.back();
        }
        return true;
    }
}
