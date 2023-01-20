import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dt'
})
export class DtPipe implements PipeTransform {

  transform(value: string): string {

    return value + '.000 DT';
  }

}
