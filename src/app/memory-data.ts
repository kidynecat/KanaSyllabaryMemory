export class MemoryData {

    public getJP50():Array<MemoObject>{
        let result:Array<MemoObject> = []

        //清音
        result.push(new MemoObject("a","あ","ア","a"))
        result.push(new MemoObject("i","い","イ","i"))
        result.push(new MemoObject("u","う","ウ","u"))
        result.push(new MemoObject("e","え","エ","e"))
        result.push(new MemoObject("o","お","オ","o"))
        result.push(new MemoObject("ka","か","カ","ka"))
        result.push(new MemoObject("ki","き","キ","ki"))
        result.push(new MemoObject("ku","く","ク","ku"))
        result.push(new MemoObject("ke","け","ケ","ke"))
        result.push(new MemoObject("ko","こ","コ","ko"))
        result.push(new MemoObject("sa","さ","サ","sa"))
        result.push(new MemoObject("shi","し","シ","shi"))
        result.push(new MemoObject("su","す","ス","su"))
        result.push(new MemoObject("se","せ","セ","se"))
        result.push(new MemoObject("so","そ","ソ","so"))
        result.push(new MemoObject("ta","た","タ","ta"))
        result.push(new MemoObject("chi","ち","チ","chi"))
        result.push(new MemoObject("tsu","つ","ツ","tsu"))
        result.push(new MemoObject("te","て","テ","te"))
        result.push(new MemoObject("to","と","ト","to"))
        result.push(new MemoObject("na","な","ナ","na"))
        result.push(new MemoObject("ni","に","ニ","ni"))
        result.push(new MemoObject("nu","ぬ","ヌ","nu"))
        result.push(new MemoObject("ne","ね","ネ","ne"))
        result.push(new MemoObject("no","の","ノ","no"))
        result.push(new MemoObject("ha","は","ハ","ha"))
        result.push(new MemoObject("hi","ひ","ヒ","hi"))
        result.push(new MemoObject("fu","ふ","フ","fu"))
        result.push(new MemoObject("he","へ","ヘ","he"))
        result.push(new MemoObject("ho","ほ","ホ","ho"))
        result.push(new MemoObject("ma","ま","マ","ma"))
        result.push(new MemoObject("mi","み","ミ","mi"))
        result.push(new MemoObject("mu","む","ム","mu"))
        result.push(new MemoObject("me","め","メ","me"))
        result.push(new MemoObject("mo","も","モ","mo"))
        result.push(new MemoObject("ya","や","ヤ","ya"))
        result.push(new MemoObject("yu","ゆ","ユ","yu"))
        result.push(new MemoObject("yo","よ","ヨ","yo"))
        result.push(new MemoObject("ra","ら","ラ","ra"))
        result.push(new MemoObject("ri","り","リ","ri"))
        result.push(new MemoObject("ru","る","ル","ru"))
        result.push(new MemoObject("re","れ","レ","re"))
        result.push(new MemoObject("ro","ろ","ロ","ro"))
        result.push(new MemoObject("wa","わ","ワ","wa"))
        result.push(new MemoObject("wo","を","ヲ","wo"))
        result.push(new MemoObject("n","ん","ン","n"))

        //浊音
        result.push(new MemoObject("ga","が","ガ","ga",FYType.zhuo,false))
        result.push(new MemoObject("gi","ぎ","ギ","gi",FYType.zhuo,false))
        result.push(new MemoObject("gu","ぐ","グ","gu",FYType.zhuo,false))
        result.push(new MemoObject("ge","げ","ゲ","ge",FYType.zhuo,false))
        result.push(new MemoObject("go","ご","ゴ","go",FYType.zhuo,false))

        result.push(new MemoObject("za","ざ","ザ","za",FYType.zhuo,false))
        result.push(new MemoObject("zi","じ","ジ","ji",FYType.zhuo,false))
        result.push(new MemoObject("zu","ず","ズ","zu",FYType.zhuo,false))
        result.push(new MemoObject("ze","ぜ","ゼ","ze",FYType.zhuo,false))
        result.push(new MemoObject("zo","ぞ","ゾ","zo",FYType.zhuo,false))

        result.push(new MemoObject("da","だ","ダ","da",FYType.zhuo,false))
        result.push(new MemoObject("di","ぢ","ヂ","ji",FYType.zhuo,false))
        result.push(new MemoObject("du","づ","ヅ","zu",FYType.zhuo,false))
        result.push(new MemoObject("de","で","デ","de",FYType.zhuo,false))
        result.push(new MemoObject("do","ど","ド","do",FYType.zhuo,false))

        result.push(new MemoObject("ba","ば","バ","ba",FYType.zhuo,false))
        result.push(new MemoObject("bi","び","ビ","bi",FYType.zhuo,false))
        result.push(new MemoObject("bu","ぶ","ブ","bu",FYType.zhuo,false))
        result.push(new MemoObject("be","べ","ベ","be",FYType.zhuo,false))
        result.push(new MemoObject("bo","ぼ","ボ","bo",FYType.zhuo,false))

        result.push(new MemoObject("pa","ぱ","パ","pa",FYType.zhuo,false))
        result.push(new MemoObject("pi","ぴ","ピ","pi",FYType.zhuo,false))
        result.push(new MemoObject("pu","ぷ","プ","pu",FYType.zhuo,false))
        result.push(new MemoObject("pe","ぺ","ペ","pe",FYType.zhuo,false))
        result.push(new MemoObject("po","ぽ","ポ","po",FYType.zhuo,false))

        //拗音
        result.push(new MemoObject("kya","きゃ","キャ","kya",FYType.niu,false))
        result.push(new MemoObject("kyu","きゅ","キュ","kyu",FYType.niu,false))
        result.push(new MemoObject("kyo","きょ","キョ","kyo",FYType.niu,false))

        result.push(new MemoObject("sya","しゃ","シャ","sha",FYType.niu,false))
        result.push(new MemoObject("syu","しゅ","シュ","shu",FYType.niu,false))
        result.push(new MemoObject("syo","しょ","ショ","sho",FYType.niu,false))

        result.push(new MemoObject("cya","ちゃ","チャ","cha",FYType.niu,false))
        result.push(new MemoObject("cyu","ちゅ","チュ","chu",FYType.niu,false))
        result.push(new MemoObject("cyo","ちょ","チョ","cho",FYType.niu,false))

        result.push(new MemoObject("nya","にゃ","ニャ","nya",FYType.niu,false))
        result.push(new MemoObject("nyu","にゅ","ニュ","nyu",FYType.niu,false))
        result.push(new MemoObject("nyo","にょ","ニョ","nyo",FYType.niu,false))

        result.push(new MemoObject("hya","ひゃ","ヒャ","hya",FYType.niu,false))
        result.push(new MemoObject("hyu","ひゅ","ヒョ","hyu",FYType.niu,false))
        result.push(new MemoObject("hyo","ひょ","ヒョ","hyo",FYType.niu,false))

        result.push(new MemoObject("mya","みゃ","ミャ","mya",FYType.niu,false))
        result.push(new MemoObject("myu","みゅ","ミュ","myu",FYType.niu,false))
        result.push(new MemoObject("myo","みょ","ミョ","myo",FYType.niu,false))

        result.push(new MemoObject("rya","りゃ","リャ","rya",FYType.niu,false))
        result.push(new MemoObject("ryu","りゅ","リュ","ryu",FYType.niu,false))
        result.push(new MemoObject("ryo","りょ","リョ","ryo",FYType.niu,false))

        result.push(new MemoObject("gya","ぎゃ","ギャ","gya",FYType.niu,false))
        result.push(new MemoObject("gyu","ぎゅ","ギュ","gyu",FYType.niu,false))
        result.push(new MemoObject("gyo","ぎょ","ギョ","gyo",FYType.niu,false))

        result.push(new MemoObject("zya","じゃ","ジャ","ja",FYType.niu,false))
        result.push(new MemoObject("zyu","じゅ","ジュ","ju",FYType.niu,false))
        result.push(new MemoObject("zyo","じょ","ジョ","jo",FYType.niu,false))

        result.push(new MemoObject("bya","びゃ","ビャ","bya",FYType.niu,false))
        result.push(new MemoObject("byu","びゅ","ビュ","byu",FYType.niu,false))
        result.push(new MemoObject("byo","びょ","ビョ","byo",FYType.niu,false))

        
        result.push(new MemoObject("pya","ぴゃ","ピャ","pya",FYType.niu,false))
        result.push(new MemoObject("pyu","ぴゅ","ピュ","pyu",FYType.niu,false))
        result.push(new MemoObject("pyo","ぴょ","ピョ","pyo",FYType.niu,false))

        return result 
    }
}

export enum FYType{
  qing =0,
  zhuo =1,
  niu =2
}

export class MemoObject{
    constructor(id,display,display2,remind = "",fytype = FYType.qing,selected = true,labels = []){
      this.DisplayText = display
      this.DisplayText2 = display2
      this.Remind = remind
      this.FYType = fytype
      this.Selected = selected
      this.Labels = labels
      this.ID = id
    }
  
    public ID = ""
    public DisplayText = ""
    public DisplayText2 = ""
    public Remind = ""
    public FYType:FYType = FYType.qing
    public Labels = []
    public Selected= true
  }