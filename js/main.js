'use strict';

{
  // let words1 = ['akarui','gakusei','daigaku','nihonngo','nukeana','kawaii','ennsoku','oosaka','kateika','kuukou','musasabi','supeinn','sazanami','okarina','papaiya','doriann','takoyaki','omuretu','kibasenn','sopurano','sa-kasu','buranndo','abokado','bo-nasu','mennseki','tannpopo','tapioka','tenugui','aikonn','raionn','rousoku','kanitama','kenndama','bokutou','amaebi','uguisu','ootoro','kazunoko','enngawa','suraimu','dekopinn','hannsei','zarigani','sukiyaki','namahamu','aozora','onigiri','daikonn','niwatori','senntou',];
  // let words2 = ['kudamono','sorobann','kumonosu','kureyonn','koumori','kokuhaku','saitama','saikoro','suitou','sutamina','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words3 = ['sennsei','soumenn','taitoru','takenoko','tamanegi','tennkiyohou','eisakubunn','eigakann','suiheisenn','aomorikenn','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words4 = ['oukakumaku','ouenndann','kaisuiyoku','kairannbann','keirounohi','koukousei','saisenntann','saibannkann','hourennsou','seihoukei','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words5 = ['sekaikiroku','sennsuikann','senntakumono','taiikukann','taiheiyou','tanukiudonn','yuutousei','tokeimawari','hakubutukann','huusenngamu','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words6 = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words7 = ['onnrainn','morainaki','housennka','suisaiga','baiorinn','monnburann','kodomonohi','omuraisu','eitanngo','akusennto','sakurannbo','niwakaame','rannkinngu','kurisumasu','udedokei','daidokoro','rinngoame','kaminenndo','daitokai','sunadokei','sutoraipu','omamagoto','derike-to','harike-nn','yukidaruma','okiniiri','ranndoseru','annke-to','kurisutaru','hizakozou','sutore-to','ronngupasu','ninaarare','iitennki','kaunnta-','zuwaigani','tarabagani','tamagoyaki','medamayaki','botannebi','watabokori','risaikuru','surumeika','dezaina-','hanebouki','karennda-','ki-bo-do','katatataki','oyakodonn','biriya-do',];
  // let words8 = ['bourinngu','taipinngu','mannho-ru','doraiya-','o-tobai','koukiatu','eigakann','konnsa-to','sayounara','koinobori','pannpukinn','yo-guruto','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words9 = ['ro-ruke-ki','inunosannpo','iroennpitu','okuribannto','nekonikobann','nemiminimizu','ekusasaizu','potetosarada','sennmonntenn','dainamaito','kara-kopi-','neirusaronn','asuparagasu','badominntonn','ikitougou','asutarisuku','daburupure-','kaisuiyoku','akiresukenn','okonomiyaki','itadakimasu','oinarisann','kurikinntonn','gotisousama','gomennnasai','taimuka-do','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let words10 = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  
  // const words = [words1,words2,words3,words4,words5,words6,words7,words8,words9,words10,];
  
  // let jpwords1 = ['明るい','学生','大学','日本語','抜け穴','かわいい','遠足','大坂','家庭科','空港','ムササビ','スペイン','さざ波','オカリナ','パパイヤ','ドリアン','たこ焼き','オムレツ','騎馬戦','ソプラノ','サーカス','ブランド','アボカド','ボーナス','面積','たんぽぽ','タピオカ','てぬぐい','	アイコン','ライオン','ろうそく','	かに玉','けんだま','木刀','甘エビ','ウグイス','大トロ','数の子','えんがわ','スライム','でこピン','反省','ザリガニ','すきやき','生ハム','青空','おにぎり','大根','ニワトリ','銭湯',];
  // let jpwords2 = ['くだもの','そろばん','クモの巣','クレヨン','コウモリ','告白','埼玉','サイコロ','水筒','スタミナ','お花見','べテラン','かまくら','ながぐつ','ネクタイ','黒板','缶蹴り','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords3 = ['先生','そうめん','タイトル','タケノコ','タマネギ','天気予報','英作文','映画館','水平線','青森県','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords4 = ['横隔膜','応援団','海水浴','回覧板','敬老の日','高校生','最先端','裁判官','ほうれん草','正方形','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords5 = ['世界記録','潜水艦','洗濯物','体育館','太平洋','たぬきうどん','優等生','時計まわり','博物館','ふうせんガム','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords6 = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords7 = ['オンライン','もらい泣き','ホウセンカ','水彩画','バイオリン','モンブラン','こどもの日','オムライス','英単語','アクセント','さくらんぼ','にわか雨','ランキング','クリスマス','腕どけい','台所','りんご飴','紙粘土','大都会','砂どけい','ストライプ','おままごと','デリケート','ハリケーン','雪だるま','お気に入り','ランドセル','アンケート','クリスタル','ひざ小僧','ストレート','ロングパス','ひなあられ','いい天気','カウンター','ズワイガニ','タラバガニ','玉子焼き','目玉焼き','ボタンえび','綿ボコリ','リサイクル','スルメイカ','デザイナー','羽根ボウキ','カレンダー','キーボード','肩たたき','親子丼','ビリヤード',];
  // let jpwords8 = ['ボウリング','タイピング','マンホール','ドライヤー','オートバイ','高気圧','映画館','コンサート','さようなら','鯉のぼり','パンプキン','ヨーグルト','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords9 = ['ロールケーキ','犬の散歩','色鉛筆','送りバント','猫に小判','寝耳に水','エクササイズ','ポテトサラダ','専門店','ダイナマイト','カラーコピー','ネイルサロン','	アスパラガス','	バドミントン','意気投合','アスタリスク','ダブルプレー','海水浴','アキレス腱','お好み焼き','いただきます','おいなりさん','栗きんとん','ごちそうさま','ごめんなさい','タイムカード','','','','','','','','','','','','','','','','','','','','','','','','',];
  // let jpwords10 = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
  
  // const jpwords = [jpwords1,jpwords2,jpwords3,jpwords4,jpwords5,jpwords6,jpwords7,jpwords8,jpwords9,jpwords10,];

  let words = [
  'akarui','gakusei','daigaku','nihonngo','nukeana','kawaii','ennsoku','oosaka','kateika','kuukou',
  'musasabi','nikutai','sazanami','okarina','papaiya','doriann','takoyaki','harusaki','kibasenn','sopurano',
  'sokuseki','yuuyake','abokado','geinou','mennseki','tannpopo','tapioka','tenugui','bokusou','hidarite',
  'rousoku','kanitama','kenndama','bokutou','amaebi','uguisu','ootoro','kazunoko','enngawa','suraimu',
  'dekopinn','hannsei','zarigani','sukiyaki','namahamu','aozora','onigiri','daikonn','niwatori','senntou',
  'kudamono','sorobann','kumonosu','kureyonn','koumori','kokuhaku','saitama','saikoro','suitou','kaigara',
  'sennsei','soumenn','asagao','takenoko','tamanegi','tennkiyohou','eisakubunn','eigakann','suiheisenn','aomorikenn',
  'oukakumaku','ouenndann','kaisuiyoku','kairannbann','keirounohi','koukousei','saisenntann','saibannkann','hourennsou','seihoukei',
  'sekaikiroku','sennsuikann','senntakumono','taiikukann','taiheiyou','tanukiudonn','yuutousei','tokeimawari','hakubutukann','huusenngamu',
  'butaniku','morainaki','housennka','suisaiga','migigawa','ehagaki','kodomonohi','omuraisu','eitanngo','saiaku',
  'sakurannbo','niwakaame','rannkinngu','wakayama','udedokei','daidokoro','rinngoame','kaminenndo','daitokai','sunadokei',
  'ourai','omamagoto','akikaze','kokoromi','yukidaruma','okiniiri','ranndoseru','kawakami','suiyou','hizakozou',
  'kaizou','saikou','hinaarare','iitennki','taikaku','zuwaigani','tarabagani','tamagoyaki','medamayaki','botannebi',
  'watabokori','kuragari','surumeika','gokuraku','hanebouki','torikime','keikoku','katatataki','oyakodonn','tokuyuu',
  'kouseki','hayaoki','kuusou','kouhai','temaneki','aburae','douyou','namikaze','sayounara','koinobori',
  'kusabana','yuuai','nigaoe','inunosannpo','hahaoya','okuribannto','nekonikobann','nemiminimizu','seimei','potetosarada',
  'sennmonntenn','yorokobi','eiyou','neirusaronn','asuparagasu','suiriku','ikitougou','asutarisuku','doutou','kaisuiyoku',
  'akiresukenn','okonomiyaki','itadakimasu','oinarisann','kurikinntonn','gomennnasai','meisei','hanauta','ekimae','haiyaku',
  'koukai','houdou','kaitei','yakuwari','saigai','keirei','kaoiro','kaisui','touyou','tekagami',
  'yononaka','hikiwake','soyokaze','taitou','ibukuro','kaigai','yasumono','kiyasume','haiboku','seikou',
  'kaisei','hakoniwa','tabemono','torihiki','mizuabi','kanntann','kitakaze','kimidori','sekizai','umanori',
  'koudai','eisai','huukei','totonou','goudou','okugai','gourei','sannsuu','housou','yuumei',
  'yubisaki','toriniku','mokuyou','yuugata','houkou','saidai','daimei','miokuri','kaidou','koutai',
  'mizuiro','katamari','baisuu','kayoubi','umagoya','kouhaku','nagaiki','yasumono','niguruma','keikai',
  'misesaki','tatakai','iwayama','yousei','geinou','ousama','kaikaku','mokuzou','yuueki','kaimono',
  'haguruma','keiteki','tabisaki','mizudori','ooame','makeinu','uragawa','doutoku','toukou','taiiku',
  'keikaku','outou','sunomono','mokuzai','oomugi','sekidou','seiyou','yuukou','kougai','kikubari',
  'tokuyuu','taiyou','eikou','koutei','yukaita','samugari','tedasuke','tanemaki','yaneura','kouzoku',
  // '',
];

  let jpwords = [
  '明るい','学生','大学','日本語','抜け穴','かわいい','遠足','大坂','家庭科','空港',
  'ムササビ','肉体','さざ波','オカリナ','パパイヤ','ドリアン','たこ焼き','春先','騎馬戦','ソプラノ',
  '即席','夕焼け','アボカド','芸能','面積','たんぽぽ','タピオカ','てぬぐい','牧草','左手',
  'ろうそく','かに玉','けんだま','木刀','甘エビ','ウグイス','大トロ','数の子','えんがわ','スライム',
  'でこピン','反省','ザリガニ','すきやき','生ハム','青空','おにぎり','大根','ニワトリ','銭湯',
  'くだもの','そろばん','クモの巣','クレヨン','コウモリ','告白','埼玉','サイコロ','水筒','貝がら',
  '先生','そうめん','朝顔','タケノコ','タマネギ','天気予報','英作文','映画館','水平線','青森県',
  '横隔膜','応援団','海水浴','回覧板','敬老の日','高校生','最先端','裁判官','ほうれん草','正方形',
  '世界記録','潜水艦','洗濯物','体育館','太平洋','たぬきうどん','優等生','時計まわり','博物館','ふうせんガム',
  '豚肉','もらい泣き','ホウセンカ','水彩画','右側','絵はがき','こどもの日','オムライス','英単語','最悪',
  'さくらんぼ','にわか雨','ランキング','和歌山','腕どけい','台所','りんご飴','紙粘土','大都会','砂どけい',
  '往来','おままごと','秋風','試み','雪だるま','お気に入り','ランドセル','川上','水曜','ひざ小僧',
  '改造','最高','ひなあられ','いい天気','体格','ズワイガニ','タラバガニ','玉子焼き','目玉焼き','ボタンえび',
  '綿ボコリ','暗がり','スルメイカ','極楽','羽根ボウキ','取り決め','警告','肩たたき','親子丼','特有',
  '功績','早起き','空想','後輩','手招き','油絵','同様','波風','さようなら','鯉のぼり',
  '草花','友愛','似顔絵','犬の散歩','母親','送りバント','猫に小判','寝耳に水','生命','ポテトサラダ',
  '専門店','喜び','栄養','ネイルサロン','アスパラガス','水陸','意気投合','アスタリスク','同等','海水浴',
  'アキレス腱','お好み焼き','いただきます','おいなりさん','栗きんとん','ごめんなさい','名声','鼻歌','駅前','配役',
  '航海','報道','改訂','役割','災害','敬礼','顔色','海水','東洋','手鏡',
  '世の中','引き分け','そよ風','対等','胃袋','海外','安物','気休め','敗北','成功',
  '快晴','箱庭','食べ物','取り引き','水浴び','簡単','北風','黄緑','石材','馬乗り',
  '広大','英才','風景','整う','合同','屋外','号令','算数','放送','有名',
  '指先','鶏肉','木曜','夕方','方向','最大','題名','見送り','街道','交代',
  '水色','固まり','倍数','火曜日','馬小屋','紅白','長生き','安物','荷車','軽快',
  '店先','戦い','岩山','陽性','芸能','王様','改革','木造','有益','買い物',
  '歯車','警笛','旅先','水鳥','大雨','負け犬','裏側','道徳','登校','体育',
  '計画','応答','酢の物','木材','大麦','赤道','西洋','友好','公害','気配り',
  '特有','太陽','栄光','校庭','床板','寒がり','手助け','種まき','屋根裏','後続',
  // '','','','','','','','','','',
];

  let trial_1 = new Array(4); 
  let trial_2 = new Array(4); 
  let trial_3 = new Array(4); 
  let trial_4 = new Array(4); 
  let trial_5 = new Array(4); 
  let trial_6 = new Array(4); 
  let trial_7 = new Array(4); 
  let trial_8 = new Array(4); 
  // let trial_9 = new Array(4); 
  // let trial_10 = new Array(4); 
  
  const record = [
    trial_1,
    trial_2,
    trial_3,
    trial_4,
    trial_5,
    trial_6,
    trial_7,
    trial_8,
    // trial_9,
    // trial_10,
  ];
  
  let n = 0;
  let time_limit = 20;

  let jpword;
  let Words ;
  let JpWords ;
  let ran;
  let word;
  let loc = 0;
  let correct  = 0;
  let mistake = 0;
  let inputcharacters = 0;
  let WordPerMinutes = 0;
  let CorrectRate = 0;
  let score = 0;
  let result = 0;
  let startTime = 0;
  let endTime = 0;
  let elapsedTime = 0;
  let isPlaying = false;
  const target = document.getElementById('target');
  const remainTime = document.getElementById('remainTime');
  const rest = document.getElementById('rest');
  remainTime.style.visibility = "hidden";
  
  document.addEventListener('keydown',() => {
    if(isPlaying === true) {
      return;
    }
    isPlaying = true ;
    target.textContent = "5秒後に開始します。キーボードに手を置いてなるべく動かないようにして下さい"
    setTimeout(function(){
      ready();
    },5000);
  });
  
  function ready(){
    target.style.visibility = "hidden";
    let count = 20;
    let ready = setInterval(function(){
      readyTime.textContent=count;
      count--;
      // console.log(count);
      if(count === -1) {
        clearInterval(ready);
        gamestart();
      }
      },1000);
    };
    
    function setWord() {
    target.style.visibility = "visible";
    japanese.style.visibility = "visible";
    readyTime.style.visibility = "hidden";

    ran = Math.floor(Math.random() * words.length);
    word = words.splice(ran,1)[0];
    jpword = jpwords.splice(ran,1)[0];
    target.textContent = word;
    japanese.textContent = jpword;
    loc = 0
  }
  
  function gamestart(){
    let time_remaining = time_limit;
    startTime = Date.now();
    readyTime.style.visibility = "hidden";
    rest.style.visibility = "hidden";
    mistake = 0;
    correct = 0;
    n++;
    setWord();
    let gametimer = setInterval(function(){
      // console.log(time_remaining);
      time_remaining--;
      if(time_remaining <= 0){
        clearInterval(gametimer);
        remain();
      }},1000);
      // ランダムで同じ単語もでるようにした。Wordsに[ran]つけた
      // 同じ単語を出さないようにするには、98,99行目を出してWordsの[ran]をけす。

    document.addEventListener('keydown',e => {
      if(time_remaining<=0){
        return false;
      } else {
        if (e.key !== word[loc]) {
          mistake++;
          return;
        } else {
          correct++;
          loc++;
          target.textContent = '_'.repeat(loc) + word.substring(loc);
        }
        if(loc === word.length) {
          if(word.length === 0) {
            endTime = Date.now();
            elapsedTime = ((endTime - startTime) / 1000).toFixed(2);
            record[n-1][0] = elapsedTime;
            remainTime.style.visibility = "visible";
          }
          setWord();
        }
      }
    });
  };
      
    function remain(){
      inputcharacters = correct + mistake;
      WordPerMinutes = 3*inputcharacters;
      CorrectRate = (correct / inputcharacters) * 100;
      score = WordPerMinutes * (CorrectRate / 100) **3;
      record[n-1][0] = WordPerMinutes;
      record[n-1][1] = correct;
      record[n-1][2] = mistake;
      record[n-1][3] = CorrectRate;
      record[n-1][4] = score;
    target.textContent = '+';
    remainTime.style.visibility = "hidden";
    japanese.style.visibility = "hidden";
    rest.style.visibility = "visible";
    console.log(record);
    rest.textContent=20;
    let remainingTime = 19;
    let clock = setInterval(function(){
      rest.textContent=remainingTime;
      // console.log(remainingTime);
      remainingTime--;
      if(remainingTime <= -1) {
        clearInterval(clock);
        if( n < 8 ){
          gamestart();
        } else if ( n === 8 ) {
          target.textContent = '終わりです！お疲れ様でした！';
          rest.style.visibility = "hidden";
          result = (record[0][4] + record[1][4] + record[2][4] + record[4][4] + record[5][4] + record[6][4] + record[7][4] ) / 8;
          console.log(result);
        }};
      },1000);
  };
      

}