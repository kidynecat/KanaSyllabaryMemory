export class MemoryData {

    public getJP50():Array<MemoObject>{
        let result:Array<MemoObject> = []
        result.push(new MemoObject("あ","ア","a"))
        result.push(new MemoObject("い","イ","i"))
        result.push(new MemoObject("う","ウ","u"))
        result.push(new MemoObject("え","エ","e"))
        result.push(new MemoObject("お","オ","o"))
        result.push(new MemoObject("か","カ","ka"))
        result.push(new MemoObject("き","キ","ki"))
        result.push(new MemoObject("く","ク","ku"))
        result.push(new MemoObject("け","ケ","ke"))
        result.push(new MemoObject("こ","コ","ko"))
        result.push(new MemoObject("さ","サ","sa"))
        result.push(new MemoObject("し","シ","shi"))
        result.push(new MemoObject("す","ス","su"))
        result.push(new MemoObject("せ","セ","se"))
        result.push(new MemoObject("そ","ソ","so"))
        result.push(new MemoObject("た","タ","ta"))
        result.push(new MemoObject("ち","チ","chi"))
        result.push(new MemoObject("つ","ツ","tsu"))
        result.push(new MemoObject("て","テ","te"))
        result.push(new MemoObject("と","ト","to"))
        result.push(new MemoObject("な","ナ","na"))
        result.push(new MemoObject("に","ニ","ni"))
        result.push(new MemoObject("ぬ","ヌ","nu"))
        result.push(new MemoObject("ね","ネ","ne"))
        result.push(new MemoObject("の","ノ","no"))
        result.push(new MemoObject("は","ハ","ha"))
        result.push(new MemoObject("ひ","ヒ","hi"))
        result.push(new MemoObject("ふ","フ","hu"))
        result.push(new MemoObject("へ","ヘ","he"))
        result.push(new MemoObject("ほ","ホ","ho"))
        result.push(new MemoObject("ま","マ","ma"))
        result.push(new MemoObject("み","ミ","mi"))
        result.push(new MemoObject("む","ム","mu"))
        result.push(new MemoObject("め","メ","me"))
        result.push(new MemoObject("も","モ","mo"))
        result.push(new MemoObject("や","ヤ","ya"))
        result.push(new MemoObject("ゆ","ユ","yu"))
        result.push(new MemoObject("よ","ヨ","yo"))
        result.push(new MemoObject("ら","ラ","ra"))
        result.push(new MemoObject("り","リ","ri"))
        result.push(new MemoObject("る","ル","ru"))
        result.push(new MemoObject("れ","レ","re"))
        result.push(new MemoObject("ろ","ロ","ro"))
        result.push(new MemoObject("わ","ワ","wa"))
        result.push(new MemoObject("を","ヲ","wo"))
        result.push(new MemoObject("ん","ン","n"))
        return result 
    }
}



export class MemoObject{
    constructor(display,display2,remind = "",labels = []){
      this.DisplayText = display
      this.DisplayText2 = display2
      this.Remind = remind
      this.Labels = labels
    }
  
    public DisplayText = ""
    public DisplayText2 = ""
    public Remind = ""
    public Labels = []
    public Selected= true
  }