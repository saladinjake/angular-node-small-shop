import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    fullName: '',
    email: '',
    password: ''
  };
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  register(theUser: User) {
    this._auth.register(theUser).subscribe(data => {
      console.log(data);
        this._router.navigate(['/login']);
    }, (err) => console.log(err));
  }
}
