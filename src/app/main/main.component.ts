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
    displayData : "点击开始",
    remind: ""
  }

  public isShowRemind = false

  ngOnInit() {
    this.loadMdatas()
  }




  private Mdata:Array<MemoObject> =[]


  loadMdatas(){
    let md = new MemoryData()
    this.Mdata = md.getJP50()
  }

  showRemind(){
    this.isShowRemind = true
  }



  getRandomMdata(){
    
    this.isShowRemind = false
    let Range = this.Mdata.length-1;  
    let Rand = Math.random();  
    let num = Math.round(Rand * Range)
    console.log(num)
    if(this.Data.displayData != this.Mdata[num].DisplayText){
      this.Data.displayData = this.Mdata[num].DisplayText
      this.Data.remind = this.Mdata[num].Remind
    }
     
    else
    this.getRandomMdata()
  }
  
}
