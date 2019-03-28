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

  public DisplayType = "A";

  public IsStart = false




  loadMdatas(){
    let md = new MemoryData()
    this.Mdata = md.getJP50()
    this.DisplayMdata =  this.Mdata
  }

  showRemind(){
    this.isShowRemind = true
  }

  changeDisplayText(e){
    console.log(e)
    this.DisplayType = e
  }

  start(){
    this.getRandomMdata()
    this.IsStart = true
  }

  getRandomMdata(){

    //console.log(this.DisplayMdata)
    this.isShowRemind = false
    let Range = this.DisplayMdata.length-1;  
    let Rand = Math.random();  
    let num = Math.round(Rand * Range)


    let tmpdisplay = ""
    if(this.DisplayType == "A" )
    { 
      let Rand2 = Math.random();  
      let r2 =Math.round(Rand2 * 1)
      console.log(r2)
      tmpdisplay = (r2 == 1 ? this.DisplayMdata[num].DisplayText : this.DisplayMdata[num].DisplayText2)
    }
    else if(this.DisplayType == "Ping")
    {
      tmpdisplay = this.DisplayMdata[num].DisplayText
    }
    else if(this.DisplayType == "Pian")
    {
      tmpdisplay = this.DisplayMdata[num].DisplayText2
    }

    
    if (this.Data.displayData != tmpdisplay){
      this.Data.displayData = tmpdisplay
      this.Data.remind = this.DisplayMdata[num].Remind
    }
    else if(this.DisplayMdata.length > 1)
    {
      this.getRandomMdata()
    }
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
