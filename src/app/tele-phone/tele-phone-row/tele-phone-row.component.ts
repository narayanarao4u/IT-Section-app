import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PhoneList } from "../phoneList";

@Component({
    selector:'tele-phone-row',
    templateUrl:'./tele-phone-row.component.html',
    styleUrls:['./tele-phone-row.component.css']
})

export class TelePhoneRowComponent {
    @Input() dataRow:PhoneList
    @Output() eventClick = new EventEmitter()

    clickEvent(){
        this.eventClick.emit(this.dataRow.Name)
    }


}