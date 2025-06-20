import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[cryptoTrendColor]',
})
export class TrendColorDirective {
  value = input.required<number | 'positive' | 'negative'>();

  constructor(private el: ElementRef<HTMLElement>) {
    effect(() => {
      const val = this.value();
      const positiveSyle = 'var(--color-text-positive, #58bd7d)';
      const negativeStyle = 'var(--color-text-negative, #D33535)';
      let colorsStyle = '';

      if (typeof val === 'number') {
        colorsStyle = val >= 0 ? positiveSyle : negativeStyle;
      } else {
        colorsStyle = val === 'positive' ? positiveSyle : negativeStyle;
      }

      this.el.nativeElement.style.color = colorsStyle;
    });
  }
}
