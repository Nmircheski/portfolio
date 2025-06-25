import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cryptoTrendSign',
})
export class TrendSignPipe implements PipeTransform {
  transform(value: number): string {
    return value >= 0 ? `+${value}` : `${value}`;
  }
}
