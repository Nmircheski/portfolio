import { DataSource } from '@angular/cdk/collections';
import { Signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
export class CryptoTableDataSource<T> extends DataSource<T> {
  constructor(private readonly dataStream: Signal<T[]>) {
    super();
  }

  connect(): Observable<T[]> {
    return toObservable(this.dataStream);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}
