import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingCategory'
})
export class RatingCategoryPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: any, args?: any): any {
    if(value <= 2) {
      return 'Poor';
    }
    if(value <= 4) {
      return 'Fine';
    }
    return 'Excellent';
  }

}
