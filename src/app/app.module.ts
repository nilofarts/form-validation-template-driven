import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './form-validation/service/user.service';

import { TwoDigitDecimalNumberDirective } from './form-validation/two-digit-decimal-number.directive';
@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    TwoDigitDecimalNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
