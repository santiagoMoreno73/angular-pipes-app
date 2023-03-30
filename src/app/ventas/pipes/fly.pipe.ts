import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flypipe',
})
export class FlyPipe implements PipeTransform {
  transform(value: string): string {
    return value ? 'vuela' : 'no vuela';
  }
}
