import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {MemoObject, MemoryData} from "../memory-data"
import { fromEvent } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() memoObjects: Array<MemoObject>;
  constructor() { }

  public mouseDownFlag = false;
  public lastTouchID = "";

  ngOnInit() {


  }

  selectAll(){
    for(let i = 0 ; i < this.memoObjects.length ; i ++)
       {
         
          this.memoObjects[i].Selected = true
       }
  }

  unselectAll(){
    for(let i = 0 ; i < this.memoObjects.length ; i ++)
       {
         
          this.memoObjects[i].Selected = false
       }
  }

  public getMarginLeft(mb:MemoObject):string{
    switch(mb.DisplayText){
      case 'ゆ' :
      return '59px'
      break;
      case  'よ':
      return '59px'
      break;
      case  'を':
      return '177px'
      break;
      
      default:
      return '1px'


    }
  }

  ngAfterViewInit(): void {
    //let divSetting = document.getElementById('divSetting')


    let mouseDown = fromEvent(window, 'mousedown');
    mouseDown.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      //console.log(`down了`);
      this.mouseDownFlag = true

    })

    let touchstart = fromEvent(window, 'touchstart');
    touchstart.subscribe((evt: TouchEvent) => {
      // Log coords of mouse movements
      //console.log(`down了`);
      this.mouseDownFlag = true

    })

    let mouseUp = fromEvent(window, 'mouseup');
    mouseUp.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      //console.log(`up了`);
      this.mouseDownFlag = false
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements

    })

    let touchend  = fromEvent(window, 'touchend');
    touchend .subscribe((evt: TouchEvent) => {
      // Log coords of mouse movements
      //console.log(`touchend`);
      this.mouseDownFlag = false

    })


    let touchmove = fromEvent(window, 'touchmove')
    touchmove.subscribe((evt: TouchEvent) => {
      // Log coords of mouse movements
      let ele=document.elementFromPoint(evt.touches[0].clientX, evt.touches[0].clientY);

      //console.log(ele)
      if(ele != null && ele.id != this.lastTouchID)
      {
        this.lastTouchID = ele.id
        for(let i = 0 ; i < this.memoObjects.length ; i ++)
        {
          if(this.memoObjects[i].DisplayText == ele.id)
          {
           this.memoObjects[i].Selected = !this.memoObjects[i].Selected 
          }
        }
      }
      
    })

    let divmemoObjects = document.getElementsByClassName('memoObjects')

    let dmemoObjectsdown = fromEvent(divmemoObjects, 'mousedown')
    dmemoObjectsdown.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements

        //console.log(evt.toElement.id)
       for(let i = 0 ; i < this.memoObjects.length ; i ++)
       {
         if(this.memoObjects[i].DisplayText == evt.toElement.id)
         {
          this.memoObjects[i].Selected = !this.memoObjects[i].Selected 
         }
       }
      })
      


    let mouseenter = fromEvent(divmemoObjects, 'mouseenter')
    mouseenter.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements

      if(this.mouseDownFlag == true){
        //console.log(evt.toElement.id)
       for(let i = 0 ; i < this.memoObjects.length ; i ++)
       {
         if(this.memoObjects[i].DisplayText == evt.toElement.id)
         {
          this.memoObjects[i].Selected = !this.memoObjects[i].Selected 
         }
       }
      }
      

    })




    
  }

}
