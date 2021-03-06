import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newline',
    pure: false
})
export class NewlinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
        if (!value) return value;

         return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}

