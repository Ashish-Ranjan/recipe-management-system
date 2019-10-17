import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  openMenu() {
    this.open = !this.open;
    return !this.open;
  }

  handleLogout() {
    this.authService.isUserLoggedOut();
  }
}
