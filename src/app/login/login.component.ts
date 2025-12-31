import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage: undefined;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    })
  }


  protected readonly onsubmit = onsubmit;

  onSubmit() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.authService.login(username, password)
      .then(resp=>{
        this.router.navigateByUrl("/admin");
      })
    .catch(err=>{
      this.errorMessage=err;
    })
  }
}
