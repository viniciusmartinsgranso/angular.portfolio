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

  public accept(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/Curriculo-Vinicius-Martins.pdf';
    link.download = 'Curriculo-Vinicius-Martins.pdf';
    link.click();
  }

  public decline(): void {
    alert('Declineado!');
  }
}
