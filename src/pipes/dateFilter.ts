import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'dateFilter'
})

export class DateFilter{
   transform(value: any, args: string[]): any {
        if (!value) return value;

      //   var filterDate = [];
     //    filterDate.push(new Date(value));

         return value.sort((date1:any, date2:any)=>{
                // This is a comparison function that will result in dates being sorted in
                // ASCENDING order. As you can see, JavaScript's native comparison operators
                // can be used to compare dates. This was news to me.
                if (new Date(date1) > new Date(date2)) return 1;
                if (new Date(date1) < new Date(date2)) return -1;
                return 0;
         });
    }
}