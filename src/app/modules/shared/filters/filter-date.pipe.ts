import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'filterDate',
})
export class FilterDatePipe implements PipeTransform {
  transform(value: NgbDateStruct, ...args: unknown[]): unknown {
    return (
      ('000' + value.month).slice(-2) +
      '.' +
      ('000' + value.day).slice(-2) +
      '.' +
      value.year
    );
  }
}
