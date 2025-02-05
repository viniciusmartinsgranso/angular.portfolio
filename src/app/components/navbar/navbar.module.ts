import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TranslatePipe } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    FormsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
