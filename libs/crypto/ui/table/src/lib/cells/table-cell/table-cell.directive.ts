import { computed, contentChild, Directive, input } from '@angular/core';
import { DataCellDirective } from '../data-cell/data-cell.directive';
import { HeaderCellDirective } from '../header-cell/header-cell.directive';

@Directive({
  selector: '[cryptoTableCell]',
})
export class TableCellDirective<T> {
  columnName = input.required<string>();

  headerCell = contentChild(HeaderCellDirective<T>);
  dataCell = contentChild(DataCellDirective<T>);

  headerTemplate = computed(() => this.headerCell()?.templateRef);
  dataTemplate = computed(() => this.dataCell()?.templateRef);
}
