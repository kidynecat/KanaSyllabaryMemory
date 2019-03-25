import { Component, OnInit } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  public Data={
    displayData : "123"
  }

  ngOnInit() {
  }


  private Mdata:string[] = ["あ","い","う","え","お","ア","イ","ウ","エ","オ"]

  getRandomMdata(){
    
    let Range = this.Mdata.length-1;  
    let Rand = Math.random();  
    let num = Math.round(Rand * Range)
    console.log(num)
    if(this.Data.displayData != this.Mdata[num])
    this.Data.displayData = this.Mdata[num]  
    else
    this.getRandomMdata()
  }
  
}
