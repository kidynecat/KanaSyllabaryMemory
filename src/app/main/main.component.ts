import { Component, OnInit } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import {MemoObject, MemoryData} from "../memory-data"
import { LocalStorage} from "../local-storage"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})





export class MainComponent implements OnInit {

  constructor() { }


  

  public Data={
    id:"",
    displayData : "",
    remind: "",
    drawerVisible:false,
  }

  public isShowRemind = false



  ngOnInit() {
    this.loadMdatas()
  }




  public Mdata:Array<MemoObject> =[]

  public DisplayMdata:Array<MemoObject> = []

  private usedDisplayMdata:Array<MemoObject> = []

  public DisplayType = "A";

  public IsStart = false

  public isDark = false




  loadMdatas(){
    let md = new MemoryData()

    let sd = LocalStorage.load<Array<MemoObject>>('selectedData')
    if(sd != null)
    {
      this.Mdata = sd
    }
    else
    {
      this.Mdata = md.getJP50()
    }
    this.reflashDisplayData();

    let dspt = LocalStorage.load<string>('displayType')
    if(dspt != null)
    {
      this.DisplayType = dspt;
    }
    

    let isdark = LocalStorage.load<boolean>('isDark')
    if(isdark != null)
    {
      this.isDark = isdark;
    }
    this.changeColor()
    
  }

  private reflashDisplayData() {
    this.DisplayMdata = [];
    this.usedDisplayMdata = [];
    for (let i = 0; i < this.Mdata.length; i++) {
      if (this.Mdata[i].Selected == true) {
        this.DisplayMdata.push(this.Mdata[i])
      }
    }
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
    let tmpremind =""

    this.Data.id = this.DisplayMdata[num].ID

    if(this.DisplayType == "A" )
    { 
      let Rand2 = Math.random();  
      let r2 =Math.round(Rand2 * 1)
      //console.log(r2)
      tmpdisplay = (r2 == 1 ? this.DisplayMdata[num].DisplayText : this.DisplayMdata[num].DisplayText2)
      tmpremind = this.DisplayMdata[num].Remind
    }
    else if(this.DisplayType == "Ping")
    {
      tmpdisplay = this.DisplayMdata[num].DisplayText
      tmpremind = this.DisplayMdata[num].Remind
    }
    else if(this.DisplayType == "Pian")
    {
      tmpdisplay = this.DisplayMdata[num].DisplayText2
      tmpremind = this.DisplayMdata[num].Remind
    }
    else if(this.DisplayType == "luo")
    {
      tmpdisplay =this.DisplayMdata[num].Remind
      tmpremind = this.DisplayMdata[num].DisplayText + "  " + this.DisplayMdata[num].DisplayText2
    }
    else if(this.DisplayType == "swap")
    {
      let Rand2 = Math.random();  
      let r2 =Math.round(Rand2 * 1)
      //console.log(r2)
      tmpdisplay = (r2 == 1 ? this.DisplayMdata[num].DisplayText : this.DisplayMdata[num].DisplayText2)
      tmpremind = (r2 == 1 ? this.DisplayMdata[num].DisplayText2 : this.DisplayMdata[num].DisplayText)
    }
    
    if (this.Data.displayData != tmpdisplay){
      this.Data.displayData = tmpdisplay
      this.Data.remind = tmpremind

      if(this.DisplayMdata.length > 1){
        var used = this.DisplayMdata.splice(num,1)
        this.usedDisplayMdata = this.usedDisplayMdata.concat(used)
      }
      else
      {
        this.DisplayMdata = this.DisplayMdata.concat(this.usedDisplayMdata)
        this.usedDisplayMdata = [] 
      }

    }
    else if(this.DisplayMdata.length > 1)
    {
      this.getRandomMdata()
    }
  }

  openDrawer(){
    // console.log("openDrawer")
    this.Data.drawerVisible = true
  }

  closeDrawer(){
    this.reflashDisplayData()


    LocalStorage.save("selectedData",this.Mdata)
    //Save localStorage
    //var storage=window.localStorage;
    LocalStorage.save("displayType",this.DisplayType)


    this.Data.drawerVisible = false
  }

  goGitHub(){
    window.location.href = "https://github.com/kidynecat/KanaSyllabaryMemory"
  }

  playSound(id:string){
    let sound :HTMLAudioElement
    sound = <HTMLAudioElement>(document.getElementById("ddsound"))
    sound.loop = false
    sound.src = `assets/${id}.mp3`
    sound.play()
  }

  colorPick(){
    if(!this.isDark)
    {

      this.isDark = true
    }
    else
    {

      this.isDark = false
    }
    this.changeColor()
    LocalStorage.save("isDark",this.isDark )
  }

  changeColor(){
    if(this.isDark)
    {
      document.body.className = "darkbackground"
      document.body.style.setProperty('--primarcolor', '#7B7B7B');
      document.body.style.setProperty('--backcolor', '#4a4a4a');
      document.body.style.setProperty('--textfontcolor', 'white');
    }
    else
    {
      document.body.className = ""
      document.body.style.setProperty('--primarcolor', '#1890ff');
      document.body.style.setProperty('--backcolor', 'white');
      document.body.style.setProperty('--textfontcolor', 'rgba(0, 0, 0, 0.65)');
    }
  }
  
}
