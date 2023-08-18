import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

username = '';
password = '';
loggeIn = false;

constructor(private authService: AuthService) {
authService.loggedIn$.subscribe((loggedIn: boolean) => {
  this.loggeIn = loggedIn;
})
}

login(): void{
  this.authService.login(this.username, this.password).subscribe()
}

logout(): void{

}

}
