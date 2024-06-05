import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/core/models/login.model';
import { ToastService } from 'src/app/core/services/business/toast.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required]
    })
  }

  submit() {
    this.submitted = true;
    if(this.form.valid) {
      const request = new Login();
      request.username = this.form.getRawValue().username;
      this.userService.login(request).subscribe(res => {

      }, err => {
        this.toast.showToast().subscribe(() => {})
      })
    }
  }

  get errorControl() {
    return this.form.controls;
  }

}
