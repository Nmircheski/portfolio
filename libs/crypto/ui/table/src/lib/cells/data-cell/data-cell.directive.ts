import { Directive, inject, input, TemplateRef } from '@angular/core';

export interface TableCellContext<T> {
  $implicit: T; //  "let-item"
}

@Directive({
  selector: '[cryptoDataCell]',
})
export class DataCellDirective<T> {
  templateRef = inject<TemplateRef<TableCellContext<T>>>(TemplateRef);
  columnName = input.required<string>({ alias: 'cryptoDataCell' });

  selectFrom = input.required<T[]>();

  static ngTemplateContextGuard<T>(
    dir: DataCellDirective<T>,
    ctx: any
  ): ctx is TableCellContext<T> {
    // As before the guard body is not used at runtime, and included only to avoid
    // TypeScript errors.
    return true;
  }
}
