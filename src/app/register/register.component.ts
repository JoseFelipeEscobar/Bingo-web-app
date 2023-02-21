import { Component } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../services/users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  userName: string = '';
  password: string = '';

  constructor(public userService: UsersService) {}

  singup() {
    const user: User = {
      name: this.name,
      userName: this.userName,
      password: this.password,
    };
    this.userService.register(user).subscribe((data) => {
      this.userService.setToken(data.token);
      console.log(data);
    });
  }
}
