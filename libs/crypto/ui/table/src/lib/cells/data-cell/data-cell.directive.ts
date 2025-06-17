import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cryptoDataCell]',
})
export class DataCellDirective<T> {
  templateRef = inject<TemplateRef<T>>(TemplateRef);
}
