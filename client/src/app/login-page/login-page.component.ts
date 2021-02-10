import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {authService} from '../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  aSub: Subscription | undefined;

  constructor(private auth: authService,
              private router: Router,
              private route: ActivatedRoute) {
    // @ts-ignore
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });

  }

  ngOnInit(): void {


    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']){
        MaterialService.toast('Now u can go!')
      } else if(params['accessDenied']){
        MaterialService.toast('Sign up firstly!')
      } else if(params['seesionFailed']){
        MaterialService.toast('Sign up again! Token dead!')
      }
    });
  }


  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
  }

  onSubmit(): void{
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
        () => this.router.navigate(['/sendMsg']),
        error => {
          MaterialService.toast(error.error.message)
          console.warn(error);
          this.form.enable();
          });
  }
}
