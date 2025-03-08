import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { ScrollAnimationType } from "../modules/interfaces/scroll-animation.type";
import { AnimationEasingType } from "../modules/interfaces/animation-ease.type";

@Directive({
  standalone: true,
  selector: '[scrollAnim]'
})
export class ScrollAnimDirective implements AfterViewInit {
  @HostBinding('@animTrigger') animState: any = null;

  @Input('scrollAnim') animationType: ScrollAnimationType = 'left';
  @Input() animDuration: string = '1s';

  @Input() animEasing: AnimationEasingType = 'ease-out';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.animState = { value: this.animationType, params: { duration: this.animDuration, easing: this.animEasing } };
        this.observer.disconnect();
      }
    }, { threshold: 0.25 });

    this.observer.observe(this.el.nativeElement);
  }
}
