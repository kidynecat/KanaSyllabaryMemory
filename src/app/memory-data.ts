export class MemoryData {

    public getJP50():Array<MemoObject>{
        let result:Array<MemoObject> = []
        result.push(new MemoObject("あ","a"))
        result.push(new MemoObject("い","i"))
        result.push(new MemoObject("う","u"))
        result.push(new MemoObject("え","e"))
        result.push(new MemoObject("お","o"))
        result.push(new MemoObject("か","ka"))
        result.push(new MemoObject("き","ki"))
        result.push(new MemoObject("く","ku"))
        result.push(new MemoObject("け","ke"))
        result.push(new MemoObject("こ","ko"))
        result.push(new MemoObject("さ","sa"))
        result.push(new MemoObject("し","shi"))
        result.push(new MemoObject("す","su"))
        result.push(new MemoObject("せ","se"))
        result.push(new MemoObject("そ","so"))
        result.push(new MemoObject("た","ta"))
        result.push(new MemoObject("ち","ti"))
        result.push(new MemoObject("つ","tsu"))
        result.push(new MemoObject("て","te"))
        result.push(new MemoObject("と","to"))
        result.push(new MemoObject("な","na"))
        result.push(new MemoObject("に","ni"))
        result.push(new MemoObject("ぬ","nu"))
        result.push(new MemoObject("に","ne"))
        result.push(new MemoObject("の","no"))
        return result 
    }
}



export class MemoObject{
    constructor(display,remind = "",labels = []){
      this.DisplayText = display
      this.Remind = remind
      this.Labels = labels
    }
  
    public DisplayText = ""
    public Remind = ""
    public Labels = []
  }