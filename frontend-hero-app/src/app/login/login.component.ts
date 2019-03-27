import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isAuth =  new EventEmitter<boolean>();
  error: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    username : ['', [Validators.required]],
    password : ['', [Validators.required]],
  });
  ngOnInit() {
  }

  Submit() {
    const data = {
      'username' : this.loginForm.value.username,
      'password' : this.loginForm.value.password
    };

    if (this.loginForm.valid) {
       this.auth.login(data)
        .subscribe(
          (result) => {
            this.loginForm.reset();
            this.router.navigate(['home']);
          },
          (error) => this.error = 'Could not authenticate'
      );
    }
  }


}
