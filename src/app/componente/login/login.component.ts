import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginGroup: FormGroup;
  
  constructor(private authService: AuthService, private router: Router) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    this.authService.login(this.loginGroup.value.username, this.loginGroup.value.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/alumno/lista/';
        this.router.navigate([redirect]);
      }
    });
  }

  login(): void {
    
  }
}
