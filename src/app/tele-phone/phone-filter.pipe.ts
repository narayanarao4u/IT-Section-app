import { Pipe, PipeTransform } from '@angular/core';
import { PhoneList } from './phoneList';

@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(PhoneNos:PhoneList[], searchValue:string): PhoneList[] {
  
    if(!PhoneNos || !searchValue){
      return PhoneNos;
    }

    let searchtxt = searchValue.toLowerCase();
    return PhoneNos.filter(phonelist => 
      phonelist.Name.toLowerCase().includes(searchtxt)||
      phonelist.Desgn.toLowerCase().includes(searchtxt)
    );
  }

}
