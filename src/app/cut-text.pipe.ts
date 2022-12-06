import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(text: string, count:number): string {
    return text.split(" ").splice(0,count).join(" ")
  }

}
