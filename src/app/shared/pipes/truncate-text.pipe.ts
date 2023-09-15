import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength: number = 120;
    return value.length <= maxLength ? value : `${value.slice(0, maxLength)}...`
  }

}
