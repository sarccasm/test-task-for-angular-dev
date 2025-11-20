import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUsername',
})
export class AddUsernamePipe implements PipeTransform {
  transform(value: string, username: string): string {
    return `${value} ${username}`;
  }
}
