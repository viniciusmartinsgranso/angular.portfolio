import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input()
  public title: string = '';

  @Input()
  public message: string = '';

  confirm(): void {
    alert('Confirmado!');
  }
}
