import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private spinner: NgxSpinnerService) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {

      /** spinner starts on init */
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
  }

}

