import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hufseparator'
})
export class HufseparatorPipe implements PipeTransform {

  transform(value: number): string {
    // Ellenőrizze, hogy az érték érvényes szám-e
    if (isNaN(value)) return '';

    // Formázza a számot a magyar forint szerint
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Ft';
  }

}
