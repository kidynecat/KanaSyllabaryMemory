export class MemoryData {

    public getJP50():Array<MemoObject>{
        let result:Array<MemoObject> = []

        //清音
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
        result.push(new MemoObject("ふ","フ","fu"))
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

        //浊音
        result.push(new MemoObject("が","ガ","ga",FYType.zhuo,false))
        result.push(new MemoObject("ぎ","ギ","gi",FYType.zhuo,false))
        result.push(new MemoObject("ぐ","グ","gu",FYType.zhuo,false))
        result.push(new MemoObject("げ","ゲ","ge",FYType.zhuo,false))
        result.push(new MemoObject("ご","ゴ","go",FYType.zhuo,false))

        result.push(new MemoObject("ざ","ザ","za",FYType.zhuo,false))
        result.push(new MemoObject("じ","ジ","ji",FYType.zhuo,false))
        result.push(new MemoObject("ず","ズ","zu",FYType.zhuo,false))
        result.push(new MemoObject("ぜ","ゼ","ze",FYType.zhuo,false))
        result.push(new MemoObject("ぞ","ゾ","zo",FYType.zhuo,false))

        result.push(new MemoObject("だ","ダ","da",FYType.zhuo,false))
        result.push(new MemoObject("ぢ","ヂ","ji",FYType.zhuo,false))
        result.push(new MemoObject("づ","ヅ","zu",FYType.zhuo,false))
        result.push(new MemoObject("で","デ","de",FYType.zhuo,false))
        result.push(new MemoObject("ど","ド","do",FYType.zhuo,false))

        result.push(new MemoObject("ば","バ","ba",FYType.zhuo,false))
        result.push(new MemoObject("び","ビ","bi",FYType.zhuo,false))
        result.push(new MemoObject("ぶ","ブ","bu",FYType.zhuo,false))
        result.push(new MemoObject("べ","ベ","be",FYType.zhuo,false))
        result.push(new MemoObject("ぼ","ボ","bo",FYType.zhuo,false))

        result.push(new MemoObject("ぱ","パ","pa",FYType.zhuo,false))
        result.push(new MemoObject("ぴ","ピ","pi",FYType.zhuo,false))
        result.push(new MemoObject("ぷ","プ","pu",FYType.zhuo,false))
        result.push(new MemoObject("ぺ","ペ","pe",FYType.zhuo,false))
        result.push(new MemoObject("ぽ","ポ","po",FYType.zhuo,false))

        //拗音
        result.push(new MemoObject("きゃ","キャ","kya",FYType.niu,false))
        result.push(new MemoObject("きゅ","キュ","kyu",FYType.niu,false))
        result.push(new MemoObject("きょ","キョ","kyo",FYType.niu,false))

        result.push(new MemoObject("しゃ","シャ","sha",FYType.niu,false))
        result.push(new MemoObject("しゅ","シュ","shu",FYType.niu,false))
        result.push(new MemoObject("しょ","ショ","sho",FYType.niu,false))

        result.push(new MemoObject("ちゃ","チャ","cha",FYType.niu,false))
        result.push(new MemoObject("ちゅ","チュ","chu",FYType.niu,false))
        result.push(new MemoObject("ちょ","チョ","cho",FYType.niu,false))

        result.push(new MemoObject("にゃ","ニャ","nya",FYType.niu,false))
        result.push(new MemoObject("にゅ","ニュ","nyu",FYType.niu,false))
        result.push(new MemoObject("にょ","ニョ","nyo",FYType.niu,false))

        result.push(new MemoObject("ひゃ","ヒャ","hya",FYType.niu,false))
        result.push(new MemoObject("ひゅ","ヒョ","hyu",FYType.niu,false))
        result.push(new MemoObject("ひょ","ヒョ","hyo",FYType.niu,false))

        result.push(new MemoObject("みゃ","ミャ","mya",FYType.niu,false))
        result.push(new MemoObject("みゅ","ミュ","myu",FYType.niu,false))
        result.push(new MemoObject("みょ","ミョ","myo",FYType.niu,false))

        result.push(new MemoObject("りゃ","リャ","rya",FYType.niu,false))
        result.push(new MemoObject("りゅ","リュ","ryu",FYType.niu,false))
        result.push(new MemoObject("りょ","リョ","ryo",FYType.niu,false))

        result.push(new MemoObject("ぎゃ","ギャ","gya",FYType.niu,false))
        result.push(new MemoObject("ぎゅ","ギュ","gyu",FYType.niu,false))
        result.push(new MemoObject("ぎょ","ギョ","gyo",FYType.niu,false))

        result.push(new MemoObject("じゃ","ジャ","ja",FYType.niu,false))
        result.push(new MemoObject("じゅ","ジュ","ju",FYType.niu,false))
        result.push(new MemoObject("じょ","ジョ","jo",FYType.niu,false))

        result.push(new MemoObject("びゃ","ビャ","bya",FYType.niu,false))
        result.push(new MemoObject("びゅ","ビュ","byu",FYType.niu,false))
        result.push(new MemoObject("びょ","ビョ","byo",FYType.niu,false))

        
        result.push(new MemoObject("ぴゃ","ピャ","pya",FYType.niu,false))
        result.push(new MemoObject("ぴゅ","ピュ","pyu",FYType.niu,false))
        result.push(new MemoObject("ぴょ","ピョ","pyo",FYType.niu,false))

        return result 
    }
}

export enum FYType{
  qing =0,
  zhuo =1,
  niu =2
}

export class MemoObject{
    constructor(display,display2,remind = "",fytype = FYType.qing,selected = true,labels = []){
      this.DisplayText = display
      this.DisplayText2 = display2
      this.Remind = remind
      this.FYType = fytype
      this.Selected = selected
      this.Labels = labels
    }
  
    public DisplayText = ""
    public DisplayText2 = ""
    public Remind = ""
    public FYType:FYType = FYType.qing
    public Labels = []
    public Selected= true
  }