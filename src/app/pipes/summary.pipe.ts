import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'summary'})
export class SummaryPipe implements PipeTransform{

  transform(val:string, arg:string[]) {
    console.log(arg);
     let limit = (arg && arg[0]) ? parseInt(arg[0]) : 50;
    if (val) {
      return val.substring(0, limit) + '.....' ;
    }
  }
}
