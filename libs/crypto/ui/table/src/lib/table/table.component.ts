import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';
import { IconComponent } from '@portfolio/ui/icon';
import { DataCellDirective } from '../cells/data-cell/data-cell.directive';
import { HeaderCellDirective } from '../cells/header-cell/header-cell.directive';
import { RowClassFn } from '../models/models';
import { RowClassListPipe } from '../utils/row-class/row-class.pipe';
import { CryptoTableDataSource } from './data-source';

@Component({
  selector: 'crypto-ui-table',
  imports: [CommonModule, CdkTableModule, IconComponent, RowClassListPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> {
  data = input.required<T[]>();

  selectable = input(false, { transform: booleanAttribute });
  headerCells = contentChildren(HeaderCellDirective<T>);
  dataCells = contentChildren(DataCellDirective<T>);

  rowClassListFn = input<RowClassFn<T>>();

  cellTemplates = computed(() => {
    return this.headerCells().length && this.dataCells().length
      ? this.headerCells().map((hc) => {
          const dataCell = this.dataCells().find(
            (c) => c.columnName() === hc.columnName()
          );

          return {
            columnName: hc.columnName,
            headerCell: hc,
            dataCell: dataCell,
          };
        })
      : [];
  });

  displayedColumns = computed(() => {
    return this.headerCells().map((c) => c.columnName());
  });

  dataSource = new CryptoTableDataSource(this.data);
}
