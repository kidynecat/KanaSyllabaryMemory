import { Component, OnInit } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import {MemoObject, MemoryData} from "../memory-data"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})





export class MainComponent implements OnInit {

  constructor() { }

  public Data={
    displayData : "开始",
    remind: "",
    drawerVisible:false
  }

  public isShowRemind = false

  ngOnInit() {
    this.loadMdatas()
  }




  public Mdata:Array<MemoObject> =[]

  public DisplayMdata:Array<MemoObject> = []


  loadMdatas(){
    let md = new MemoryData()
    this.Mdata = md.getJP50()
    this.DisplayMdata =  this.Mdata
  }

  showRemind(){
    this.isShowRemind = true
  }

  getRandomMdata(){

    //console.log(this.DisplayMdata)
    this.isShowRemind = false
    let Range = this.DisplayMdata.length-1;  
    let Rand = Math.random();  
    let num = Math.round(Rand * Range)
    
    if(this.Data.displayData != this.DisplayMdata[num].DisplayText){
      this.Data.displayData = this.DisplayMdata[num].DisplayText
      this.Data.remind = this.DisplayMdata[num].Remind
    }
     
    else
    this.getRandomMdata()
  }

  openDrawer(){
    // console.log("openDrawer")
    this.Data.drawerVisible = true;
  }

  closeDrawer(){
    this. DisplayMdata  = []
    for(let i = 0 ; i < this.Mdata.length ; i ++){
      if(this.Mdata[i].Selected == true)
      {
        this.DisplayMdata.push(this.Mdata[i])
      }
    }

    this.Data.drawerVisible = false;
  }
  
}
