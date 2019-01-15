import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {

  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const pasword = form.value.password;
    this.authService.signinUser(email, pasword);

    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('.modal-backdrop').classList.remove('modal-backdrop');
  }


}
