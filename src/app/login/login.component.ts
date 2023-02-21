import { Component } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../services/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user: User = { userName: this.userName, password: this.password };

    console.log(user);
    this.router.navigateByUrl('/loby');

    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      console.log(data);
    });
  }
}
