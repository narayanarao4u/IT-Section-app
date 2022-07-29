import { Component, OnInit } from '@angular/core';
import { Assest } from './asset';
import { DataService } from './data.service';

declare let toastr
@Component({
  selector: 'app-it-assets',
  templateUrl: './it-assets.component.html',
  styleUrls: ['./it-assets.component.css']
})
export class ItAssetsComponent implements OnInit {
  dataList:any;
  dataRow:Assest;
  user:any;
  section:any;
  constructor(private ds: DataService) { }

  getlist(){
    this.dataRow = new Assest();
    return this.ds.getData().subscribe(res => {           
      this.dataList = res
      this.dataList.data = this.dataList.data.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
    }, err => {
      console.log(err)
      toastr.error( err.statusText )
    })
  }

  addData(){
    
    this.dataRow.User = this.user;
    this.dataRow.Section = this.section;
    return this.ds.saveData(this.dataRow).subscribe(res => {       
      this.getlist()
      toastr.success('Update Success')
    })   
  }

  edit(dataRow:Assest){
    this.dataRow = dataRow;
    this.user = this.dataRow.User;
     this.section =this.dataRow.Section;
  }

  ngOnInit(): void {
    this.getlist()
    
  }
 
 

}
