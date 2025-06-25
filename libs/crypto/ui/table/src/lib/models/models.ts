export type RowClass = 'table__row' | 'table__row-alternate-color';
export type RowClassFn<T> = (row: T, index: number) => RowClass[];
