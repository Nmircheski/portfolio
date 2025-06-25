import { Directive, inject, input, TemplateRef } from '@angular/core';

export interface TableCellContext<T> {
  $implicit: T; //  "let-item"
  index: number;
}

@Directive({
  selector: '[cryptoDataCell]',
})
export class DataCellDirective<T> {
  templateRef = inject<TemplateRef<TableCellContext<T>>>(TemplateRef);
  columnName = input.required<string>({ alias: 'cryptoDataCell' });
  align = input<'left' | 'right'>('right');

  /**
   * Used to infer the type of the context in template
   */
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
