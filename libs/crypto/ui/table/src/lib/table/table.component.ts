import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';
import { TableCellDirective } from '../cells/table-cell/table-cell.directive';
import { CryptoTableDataSource } from './data-source';

@Component({
  selector: 'crypto-ui-table',
  imports: [CommonModule, CdkTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> {
  data = input.required<T[]>();

  selectable = input(false, { transform: booleanAttribute });
  cellTemplates = contentChildren(TableCellDirective<T>);

  displayedColumns = computed(() => {
    return this.cellTemplates().map((c) => c.columnName);
  });

  dataSource = new CryptoTableDataSource(this.data);
}
