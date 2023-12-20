import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email : string = ""
  password : string = ""

  constructor(private auth: AngularFireAuth,public router: Router){}

  signIn(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email,password)
    .then(res =>{
      this.auth.authState.subscribe(user =>{
        if(user){
          this.router.navigate(["dashboard"])
        }
      })
    }).catch(err =>{
      window.alert("Failed to Log in")
    })
  }
}
