import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import { ProjectCardModule } from "../../components/project-card/project-card.module";
import { TranslatePipe } from "@ngx-translate/core";


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectCardModule,
    TranslatePipe,
    NgOptimizedImage,
  ],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
