import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cryptoHeaderCell]',
})
export class HeaderCellDirective<T> {
  templateRef = inject<TemplateRef<T>>(TemplateRef);
  columnName = input.required<string>({ alias: 'cryptoHeaderCell' });
  align = input<'left' | 'right'>('right');
}
