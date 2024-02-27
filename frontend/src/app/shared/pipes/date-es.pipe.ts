import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/** Date format new Date() to Format = 2022-11-25T20:11:58.053Z or 2022-11-25 => 25/11/2022 */
@Pipe({
  name: 'dateEs',
})
export class DateEsPipe extends DatePipe implements PipeTransform {
  override transform(value: any, ...args: ('date'|'time'|'datetime'|'dateAndTime'|'custom')[]): any {

    if(args[0]==='date') return super.transform(value, 'dd/MM/yyyy'); //'dd/MM/Y'
    if(args[0]==='time') return super.transform(value, 'HH:mm:ss a');
    if(args[0]==='datetime') return `${super.transform(value, 'dd/MM/yyyy')} ${super.transform(value, 'HH:mm:ss a')}`;
    if(args[0]==='dateAndTime') return `${super.transform(value, 'dd/MM/yyyy')} ${super.transform(value, 'HH:mm')}`;
    if(args[0]==='custom') return super.transform(value, 'd MMM y, h:mm.');

    return super.transform(value, 'dd/MM/yyyy, ');
  }
}
