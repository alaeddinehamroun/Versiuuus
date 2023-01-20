import { Injectable, Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';

@Injectable()
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string): any {

    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

    let sorted: any[] = []

    if (!sortKey) {
      return value
    } else {
      if (sortKey == 'minPrice') {
        sorted = value
          .sort((a, b) => {
            if (Number(a[sortKey]) < Number(b[sortKey])) return -1;
            else if (Number(a[sortKey]) > Number(b[sortKey])) return 1;
            else return 0;
          });
      }
      else if (sortKey == 'name') {
        sorted = value
          .sort((a, b) => {
            if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) return -1;
            else if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) return 1;
            else return 0;
          });
      }
      return sortOrder === 'asc' ? sorted : sorted.reverse();

    }
  }
  // public minPrice(price1: string, price2: string) {

  //   if (!price1) {
  //     return Number(price2)

  //   }
  //   if (!price2) {
  //     return Number(price1)

  //   }
  //   if (Number(price1) > Number(price2)){
  //     return Number(price2)
  //   }
  //   else
  //     return Number(price1)


  // }
}
