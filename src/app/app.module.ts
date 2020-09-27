import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
// angular material imports
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPaswswordFormComponent } from './components/reset-paswsword-form/reset-paswsword-form.component';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Aos from 'aos';
// ..
Aos.init();


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    ResetPaswswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatSliderModule,
    MatDividerModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
