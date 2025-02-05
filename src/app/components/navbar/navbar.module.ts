import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TranslatePipe } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { AboutMeModule } from "../about-me/about-me.module";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    FormsModule,
    AboutMeModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
