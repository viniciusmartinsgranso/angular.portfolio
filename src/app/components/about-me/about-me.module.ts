import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { TranslatePipe } from "@ngx-translate/core";



@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    TranslatePipe
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
