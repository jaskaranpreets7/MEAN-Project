import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  message: any ;


  constructor(private fb: FormBuilder, private signupservice: SignUpService, private router:  Router) { }

  signupForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email : ['', [Validators.required]],
    username : ['', [Validators.required]],
    password : ['', [Validators.required]]
  });

  ngOnInit() {
  }

  onSignUp() {
    const data = {
      'firstName': this.signupForm.value.firstName,
      'lastName': this.signupForm.value.lastName,
      'email': this.signupForm.value.email,
      'username': this.signupForm.value.username,
      'password': this.signupForm.value.password
    };

    this.signupservice.signUp(data)
      .then(res => {
        console.log(data);
        this.message = res; })
      .catch( err => { this.message = err; });
      alert('Signing up Successfully');
  }


}
