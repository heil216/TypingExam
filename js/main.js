'use strict';

{
  let words1 = ['akarui','gakusei','daigaku','nihonngo','nukeana','kawaii','tonnkatu','oosaka','kateika','kuukou',];
  let words2 = ['kudamono','sorobann','kumonosu','kureyonn','koumori','kokuhaku','saitama','saikoro','suitou','sutamina',];
  let words3 = ['sennsei','soumenn','taitoru','takenoko','tamanegi','tennkiyohou','eisakubunn','eigakann','suiheisenn','aomorikenn',];
  let words4 = ['oukakumaku','ouenndann','kaisuiyoku','kairannbann','keirounohi','koukousei','saisentan','saibannkann','hourennsou','seihoukei',];
  let words5 = ['sekaikiroku','sennsuikann','senntakumono','taiikukann','taiheiyou','tanukiudonn','tikarakurabe','tokeimawari','hakubutukann','huusenngamu',];
  const words = [words1,words2,words3,words4,words5,];
  
  let jpwords1 = ['明るい','学生','大学','日本語','抜け穴','かわいい','とんかつ','大坂','家庭科','空港',];
  let jpwords2 = ['くだもの','そろばん','クモの巣','クレヨン','コウモリ','告白','埼玉','サイコロ','水筒','スタミナ',];
  let jpwords3 = ['先生','そうめん','タイトル','タケノコ','タマネギ','天気予報','英作文','映画館','水平線','青森県',];
  let jpwords4 = ['横隔膜','応援団','海水浴','回覧板','敬老の日','高校生','最先端','裁判官','ほうれん草','正方形',];
  let jpwords5 = ['世界記録','潜水艦','洗濯物','体育館','太平洋','たぬきうどん','ちからくらべ','時計まわり','博物館','ふうせんガム',];
  
  const jpwords = [jpwords1,jpwords2,jpwords3,jpwords4,jpwords5,];

  let trial1 = new Array(2); 
  let trial2 = new Array(2); 
  let trial3 = new Array(2); 
  let trial4 = new Array(2); 
  let trial5 = new Array(2); 
  
  const record = [
    trial1,
    trial2,
    trial3,
    trial4,
    trial5,
  ];

  let n = 0;
  let time_limit = 30;
  // let gTimeLimit;    // 制限時間用
  // let gTimeStart;    // 開始時間用
  // let gTid;          // タイマー用
  let jpword;
  let Words ;
  let JpWords ;
  let ran;
  let word;
  let loc = 0;
  let correct  = 0;
  let mistake = 0;
  let startTime = 0;
  let endTime = 0;
  let elapsedTime = 0;
  let isPlaying = false;
  const result = document.getElementById('result');
  const target = document.getElementById('target');
  // let japanese = document.getElementById('japanese');
  // let readyTime = document.getElementById('readyTime');
  // let rest = document.getElementById('rest');
  
  document.addEventListener('keydown',() => {
    if(isPlaying === true) {
      return;
    }
    isPlaying = true ;
    ready();
  });
  
  function ready(){
    var count = 4;
    var ready = setInterval(function(){
      count--;
      readyTime.textContent=count;
      if(count <= 0) {
        clearInterval(ready);
        gamestart();
      }
      },1000);
    };
    
    // function setWord(){
      //     var count = 10;
      //     readyTime.style.visibility = "hidden";
      //     var ready = setInterval(function(){
        //       count--;
        //       ran = Math.floor(Math.random() * words.length);
        //       word = words.splice(ran,1)[0];
  //       jpword = jpwords.splice(ran,1)[0];
  //       target.textContent = word;
  //       japanese.textContent = jpword;
  //       loc = 0
  //       if(count <= 0) {
    //         clearInterval(ready);
    //       };
    //     },10000);
    //   };
    
    function setWord() {
      readyTime.style.visibility = "hidden";


      if( n === 1 ) {
        Words = words[0];
        JpWords = jpwords[0];
      } else if ( n === 2 ) {
        Words = words[1];
        JpWords = jpwords[1];
      } else if ( n === 3 ) {
        Words = words[2];
        JpWords = jpwords[2];
      } else if ( n === 4 ) {
        Words = words[3];
        JpWords = jpwords[3];
      } else if ( n === 5 ) {
        Words = words[4];
        JpWords = jpwords[4];
      } else {
        result.textContent = 'Finished!';
      }
      ran = Math.floor(Math.random() * Words.length);
      word = Words.splice(ran,1)[0];
      jpword = JpWords.splice(ran,1)[0];
      target.textContent = word;
      japanese.textContent = jpword;
      loc = 0
      
    }
    
    function gamestart(){
      startTime = Date.now();
      // console.log(startTime);
      n++;
      if( n < 6 ){
        setWord();
        var time_remaining = time_limit;
        var gametimer = setInterval(function(){
            time_remaining--;
            if(time_remaining <= 0){
            clearInterval(gametimer);
            remain();
      }},1000);
      } else {
        result.textContent = 'Finished!';
        // result.style.visibility = "visible";
      }
    };

    function remain(){
      mistake = 0;
      correct = 0;
      let remainingTime = 4;
      let clock = setInterval(function(){
        remainingTime--;
        rest.textContent=remainingTime;
        if(remainingTime <= 0) {
   
          clearInterval(clock);
          gamestart();
        }
        },1000);

      };

        document.addEventListener('keydown',e => {
          if (e.key !== word[loc]) {
            mistake++;
            return;
          } else {
            correct++;
            loc++;
            target.textContent = '_'.repeat(loc) + word.substring(loc);
            // console.log(loc);
          }

          
          if(loc === word.length) {
            if(Words.length === 0) {
              endTime = Date.now();
              elapsedTime = ((endTime - startTime) / 1000).toFixed(2);
              record[n-1][0] = elapsedTime;
              record[n-1][1] = correct;
              record[n-1][2] = mistake;
              console.log(record);
            }
              setWord();
              
          }
        });
      }