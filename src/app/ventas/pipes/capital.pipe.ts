import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalletter',
})
export class CapitalLetterPipe implements PipeTransform {
  transform(): string {
    return 'Hi World';
  }
}
