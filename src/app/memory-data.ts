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
        result.push(new MemoObject("ち","chi"))
        result.push(new MemoObject("つ","tsu"))
        result.push(new MemoObject("て","te"))
        result.push(new MemoObject("と","to"))
        result.push(new MemoObject("な","na"))
        result.push(new MemoObject("に","ni"))
        result.push(new MemoObject("ぬ","nu"))
        result.push(new MemoObject("ね","ne"))
        result.push(new MemoObject("の","no"))
        result.push(new MemoObject("は","ha"))
        result.push(new MemoObject("ひ","hi"))
        result.push(new MemoObject("ふ","hu"))
        result.push(new MemoObject("へ","he"))
        result.push(new MemoObject("ほ","ho"))
        result.push(new MemoObject("ま","ma"))
        result.push(new MemoObject("み","mi"))
        result.push(new MemoObject("む","mu"))
        result.push(new MemoObject("め","me"))
        result.push(new MemoObject("も","mo"))
        result.push(new MemoObject("や","ya"))
        result.push(new MemoObject("ゆ","yu"))
        result.push(new MemoObject("よ","yo"))
        result.push(new MemoObject("ら","ra"))
        result.push(new MemoObject("り","ri"))
        result.push(new MemoObject("る","ru"))
        result.push(new MemoObject("れ","re"))
        result.push(new MemoObject("ろ","ro"))
        result.push(new MemoObject("わ","wa"))
        result.push(new MemoObject("を","wo"))
        result.push(new MemoObject("ん","n"))
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
    public Selected= true
  }