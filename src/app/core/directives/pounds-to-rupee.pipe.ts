import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poundsToRupee'
})
export class PoundsToRupeePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
