import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  isMobile(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }

}
