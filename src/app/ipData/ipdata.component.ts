import { Component, OnInit } from '@angular/core';
import { ipData } from './ipData';
import { ToastrService } from '../common/toastr.service';
import { IpDataService } from './ipdata.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-ipdata',
  templateUrl: './ipdata.component.html',
  styleUrls: ['./ipdata.component.css']
})
export class IpdataComponent implements OnInit {

  dataList:any;
  dataRow = new ipData();
  editBtn = false;

  constructor(private ds: IpDataService, private auth:AuthService,
            private toastr:ToastrService) { }

  getlist(){
    this.dataRow = new ipData();
    return this.ds.getipData().subscribe(res => {           
      this.dataList = res
      this.dataList.data = this.dataList.data.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })
  }

  addData(){
       
    return this.ds.saveipData(this.dataRow).subscribe(res => {       
      this.toastr.success('Update Success');      
      this.getlist()
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })  
  }

  edit(dataRow:ipData){
    this.dataRow = dataRow;

  }

  
  
  ngOnInit(): void {
   this.getlist()   
   this.editBtn = this.auth.loggedIn() 
  }

}
