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
import { CryptoTableDataSource } from './data-source';

@Component({
  selector: 'crypto-ui-table',
  imports: [CommonModule, CdkTableModule, IconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> {
  data = input.required<T[]>();

  selectable = input(false, { transform: booleanAttribute });
  headerCells = contentChildren(HeaderCellDirective<T>);
  dataCells = contentChildren(DataCellDirective<T>);

  cellTemplates = computed(() => {
    return this.headerCells().length && this.dataCells().length
      ? this.headerCells().map((hc) => {
          const headerTemplate = hc.templateRef;
          const dataCell = this.dataCells().find(
            (c) => c.columnName() === hc.columnName()
          );

          return {
            columnName: hc.columnName,
            header: {
              headerTemplate,
              align: hc.align,
            },
            data: dataCell
              ? {
                  dataTemplate: dataCell.templateRef,
                  align: dataCell.align,
                }
              : null,
          };
        })
      : [];
  });

  displayedColumns = computed(() => {
    return this.headerCells().map((c) => c.columnName());
  });

  dataSource = new CryptoTableDataSource(this.data);
}
