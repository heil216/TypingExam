'use strict';

{
  let words1 = ['a','i','u'];
  let words2 = ['e','o','k'];
  let words3 = ['r','t','y'];
  const words = [words1,words2,words3];
  
  let jpwords1 = ['あ','い','う'];
  let jpwords2 = ['え','お','か'];
  let jpwords3 = ['る','ち','よ'];
  const jpwords = [jpwords1,jpwords2,jpwords3];

  
  let trial1 = new Array(2); 
  let trial2 = new Array(2); 
  let trial3 = new Array(2); 
  
  const record = [
    trial1,
    trial2,
    trial3,
  ];

  let n = 0;
  let time_limit = 10;
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
      } else {
        return ;
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
      if( n < 4 ){
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