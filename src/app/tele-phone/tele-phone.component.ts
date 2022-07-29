import { Component, OnInit } from '@angular/core';
import { PhoneList } from './phoneList';
import { TelephoneDataService } from './telephone-data.service';

declare var $: any;
@Component({
  selector: 'app-tele-phone',
  templateUrl: './tele-phone.component.html',
  styleUrls: ['./tele-phone.component.css']
})
export class TelePhoneComponent implements OnInit {
  phoneList:PhoneList[];
  query:any;
  constructor(private ds:TelephoneDataService) { }

  getList(){
    return this.ds.getExcelData().subscribe((res:PhoneList[]) => {      
      this.phoneList = res["tele"];
    })
  }

  phoneclickEvent(data:any){
      console.log('Dailing Data', data);      
  }



  ngOnInit(): void {
    this.getList();
    
    console.log(`jQuery version: ${$.fn.jquery}`);
  }

}
