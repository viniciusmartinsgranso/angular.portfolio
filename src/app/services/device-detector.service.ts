import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  public isMobile(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
  }

  public isDesktop(): boolean {
    return !this.isMobile();
  }

}
