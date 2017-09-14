import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, arg1?: number, arg2?: string ) : string {
    if(value){
      let limit = arg1 || 10;
      let trail = arg2 || '...';

      return value.length > (limit+2) ? value.substring(0, limit) + trail : value;
    }
    return value;
  }
}
