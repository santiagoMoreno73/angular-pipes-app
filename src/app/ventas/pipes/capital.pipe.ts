import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalletter',
})
export class CapitalLetterPipe implements PipeTransform {
  transform(value: string, isUpper?: boolean): string {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
