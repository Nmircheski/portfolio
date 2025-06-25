import { Pipe, PipeTransform } from '@angular/core';
import { RowClass, RowClassFn } from '../../models/models';

@Pipe({
  name: 'rowClassList',
})
export class RowClassListPipe<T> implements PipeTransform {
  transform(row: T, index: number, rowClassListFn?: RowClassFn<T>): RowClass[] {
    const defaultClassList: RowClass[] = ['table__row'];

    return rowClassListFn
      ? [...defaultClassList, ...rowClassListFn(row, index)]
      : defaultClassList;
  }
}
