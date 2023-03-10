import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  login(username: string, password: string): Observable<boolean> {
    // Replace this with actual login logic
    console.log("this.username", username)
    console.log("this.username", password)
    const isLoggedIn = username === 'user' && password === 'password';

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(val => 
        {this.isLoggedIn = val
        console.log("this.isLoggedIn", this.isLoggedIn)})
      
    );
    
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login/']);
  }
}
