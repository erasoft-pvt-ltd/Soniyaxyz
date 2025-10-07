import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router){

  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    if(this.loginForm.value.email =="admin" && this.loginForm.value.password=="admin"){
     this.router.navigate(['/admin/jobs']);
    }
    else{
      alert("Invalid Credentials ! ")
    }
  }
}
