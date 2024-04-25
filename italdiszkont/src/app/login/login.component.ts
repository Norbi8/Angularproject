import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')  
  });
  loading = true;

  constructor(private router: Router ,private authService: AuthService,private userService:UserService){
    
  }

  

  async login(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if(email && password){
      this.authService.login(email,password).then(cred=>{
        //console.log(cred);
        this.router.navigateByUrl('/drink') ;
        this.loading = false;
      }).catch(error=>{
        //console.error(error);
        this.loading = false;
      });
    }
  }

  async singUp(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    if(email && password){
      this.authService.signup(email, password).then(cred => {
        console.log(cred);
        const user = {
          id: cred.user?.uid as string,
          email: email
        }
        this.router.navigateByUrl('/drink');
        this.loading = false;
        this.userService.create(user).then(_ => {
          console.log('User added successfully.')
        }).catch(error => {
          //console.error(error);
        })
      }).catch(error => {
        //console.error(error);
        this.loading = false;
      });
    }
  }
}
