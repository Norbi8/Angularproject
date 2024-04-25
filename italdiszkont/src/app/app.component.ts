import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'italdiszkont';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService:AuthService){

  }
  
  logout(){
    this.authService.logout().then(()=>{
      console.log('logged out successfully.');
    }).catch(error=>{
     // console.log(error);
    });
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user',JSON.stringify(this.loggedInUser));
    }, error => {
      //console.error(error);
      localStorage.setItem('user',JSON.stringify('null'));
    })
  }
}
