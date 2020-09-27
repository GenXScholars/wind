import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-paswsword-form',
  templateUrl: './reset-paswsword-form.component.html',
  styleUrls: ['./reset-paswsword-form.component.scss']
})
export class ResetPaswswordFormComponent implements OnInit {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }

}
