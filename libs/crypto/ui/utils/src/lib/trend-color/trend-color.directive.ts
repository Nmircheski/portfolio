import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[cryptoTrendColor]',
})
export class TrendColorDirective {
  value = input.required<number>();

  constructor(private el: ElementRef<HTMLElement>) {
    effect(() => {
      const val = this.value();

      const color =
        val >= 0
          ? 'var(--color-text-positive, #58bd7d)'
          : 'var(--color-text-negative, #D33535)';

      this.el.nativeElement.style.color = color;
    });
  }
}
