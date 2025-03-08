import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import { ProjectCardModule } from "../../components/project-card/project-card.module";
import { TranslatePipe } from "@ngx-translate/core";
import { ScrollAnimDirective } from "../../directives/scroll-anim.directive";
import { FooterComponent } from "../../components/footer/footer.component";


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
    ScrollAnimDirective,
    FooterComponent,
  ],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
