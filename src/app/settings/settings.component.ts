import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MemoObject, MemoryData,FYType } from "../memory-data"
import { fromEvent } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() memoObjects: Array<MemoObject>;
  @Input() displayType: string;
  @Output() changeDisplayText = new EventEmitter<string>()
  constructor() { }

  public mouseDownFlag = false;
  public lastTouchID = "";


  ngOnInit() {
  }

  selectAll(fyType:FYType) {
    for (let i = 0; i < this.memoObjects.length; i++) {
      if(this.memoObjects[i].FYType == fyType)
        this.memoObjects[i].Selected = true
    }
  }

  unselectAll(fyType:FYType) {
    for (let i = 0; i < this.memoObjects.length; i++) {
      if(this.memoObjects[i].FYType == fyType)
        this.memoObjects[i].Selected = false
    }
  }

  public getMarginLeft(mb: MemoObject): string {
    switch (mb.DisplayText) {
      case 'ゆ':
        return '57px'
        break;
      case 'よ':
        return '57px'
        break;
      case 'を':
        return '170px'
        break;

      default:
        return '1px'
    }
  }

  getDisplayText(mb: MemoObject):string{
    let str = ""
    if(this.displayType == "A"){
      return mb.DisplayText + "  " + mb.DisplayText2 
    }
    else if(this.displayType =="Ping"){
      return mb.DisplayText
    }
    else if(this.displayType =="Pian"){
      return mb.DisplayText2
    }
    else if(this.displayType =="luo"){
      return mb.Remind
    }
    else if(this.displayType == "swap"){
      return mb.DisplayText
    }
  }


  getRemindText(mb: MemoObject):string
  {
    if(this.displayType =="luo"){
      return mb.DisplayText + "  " + mb.DisplayText2
    }
    else if(this.displayType == "swap"){
      return mb.DisplayText2
    }
    else
    {
      return mb.Remind
    }
  }

  getFYTypeObjects(mb:Array<MemoObject>,fyType:FYType):Array<MemoObject>{
    let result:Array<MemoObject> = []
    mb.forEach((o,i,m) =>{
      if(o.FYType == fyType)
      {
        result.push(o)
      }
    })
    return result
  }

  ondisplayType(){
    //console.log(this.displayType)
    this.changeDisplayText.emit(this.displayType)
  }

  ngAfterViewInit(): void {
    //let divSetting = document.getElementById('divSetting')


    let mouseDown = fromEvent(window, 'mousedown');
    mouseDown.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      //console.log(`window mousedown`);
      this.mouseDownFlag = true

    })

    let touchstart = fromEvent(window, 'touchstart');
    touchstart.subscribe((evt: TouchEvent) => {
      // Log coords of mouse movements
      //console.log('window touchstart' );
      let ele = document.elementFromPoint(evt.touches[0].clientX, evt.touches[0].clientY);
      //console.log(ele)
      if (ele != null && ele.className == "memoObjects") {
        this.mouseDownFlag = true
      }
    })

    let mouseUp = fromEvent(window, 'mouseup');
    mouseUp.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      //console.log(`window mouseup`);
      this.mouseDownFlag = false
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements

    })

    let touchend = fromEvent(window, 'touchend');
    touchend.subscribe((evt: TouchEvent) => {
      // Log coords of mouse movements
      //console.log(`window touchend`);
      this.mouseDownFlag = false

    })


    window.addEventListener('touchmove',  e => {
      if (this.mouseDownFlag == true)
      {
       e.preventDefault()
      }
    }, { passive: false })


    let touchmove = fromEvent(window, 'touchmove')
    touchmove.subscribe((evt: TouchEvent) => {
      if (this.mouseDownFlag == true) {
        // Log coords of mouse movements
        let ele = document.elementFromPoint(evt.touches[0].clientX, evt.touches[0].clientY);

        
        if (ele != null && ele.id != this.lastTouchID) {
          //console.log(ele)
          this.lastTouchID = ele.id
          for (let i = 0; i < this.memoObjects.length; i++) {
            if (this.memoObjects[i].DisplayText == ele.id) {
              this.memoObjects[i].Selected = !this.memoObjects[i].Selected
            }
          }
        }
      }

    })

    let divmemoObjects = document.getElementsByClassName('memoObjects')

    let dmemoObjectsdown = fromEvent(divmemoObjects, 'mousedown')
    dmemoObjectsdown.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements

      //console.log("Objects mousedown")
      for (let i = 0; i < this.memoObjects.length; i++) {
        if (this.memoObjects[i].DisplayText == evt.toElement.id) {
          this.memoObjects[i].Selected = !this.memoObjects[i].Selected
        }
      }
    })



    let mouseenter = fromEvent(divmemoObjects, 'mouseenter')
    mouseenter.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements

      if (this.mouseDownFlag == true) {
        //console.log("Objects mouseenter")
        for (let i = 0; i < this.memoObjects.length; i++) {
          if (this.memoObjects[i].DisplayText == evt.toElement.id) {
            this.memoObjects[i].Selected = !this.memoObjects[i].Selected
          }
        }
      }


    })





  }

}
