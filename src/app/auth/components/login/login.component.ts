import { Component } from '@angular/core';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!: FormGroup;

  constructor(private fb: FormBuilder,public router:Router,public apiservice:AuthServiceService) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
console.log("form submitted");

    if (this.login.valid) {
      let data = this.login.value;
     
      this.apiservice.login(data).subscribe((res) => {
        console.log(res); 
        if (res.token) {     
          localStorage.setItem("token", res.token);
          this.router.navigate(['/dashboard']);
        } else {
          alert(res.message);
        }
      });
      console.log("form data ==>", data);
    }
  }
}
