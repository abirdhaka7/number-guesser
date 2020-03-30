let   min = 1;
      max = 10;
      winingNum = getRandomNum(min, max);
      guessesLeft = 3;
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessInput = document.querySelector('#guess-input');
      guessBtn = document.querySelector('#guess-btn');
      massage = document.querySelector('.massage');


      minNum.textContent = min;
      maxNum.textContent = max;


      //Play again event listner
      game.addEventListener('mousedown', function(e){
        //console.log(1);
        if(e.target.className === 'play-again'){
           window.location.reload();
        }
      });

      guessBtn.addEventListener('click', function(){

      let guess = parseInt(guessInput.value);


  if( isNaN(guess) || guess < min || guess > max){
    setMassage(`Please Put a number between${min} and ${max}`, 'red');
  }

  if(guess === winingNum){
    //game over - won        
    gameOver(true,`${winingNum} is correct! You Win` );

    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'green';     
    // setMassage(`${winingNum} is correct! You Win`, 'green');
  }else{
    //wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
        //game over - lost
        gameOver(false, `Game Over. You Fucked Up. Correct Num ${winingNum}`) ;      

      // guessInput.disabled = true;
      // guessInput.style.borderColor = 'red';     
      // setMassage(`Game Over. You Fucked Up. Correct Num ${winingNum}`, 'red');

    }else{
      //Game continues - answer wrong

      //Change border color
      guessInput.style.borderColor = 'red';

      //Clear Input
      guessInput.value= '';

      //Tell user wrong number
      setMassage(`${guess} is not correct, ${guessesLeft} 
      guesses left`, 'red');

      
    }

  }




});


    //Game over
    function gameOver(won,msg){
      let color;
      won === true ? color = 'green' : color = 'red';

      //Disable the input field
      guessInput.disabled = true;
      //Change the border color
      guessInput.style.borderColor = color; 
      //Set text color
      massage.style.color = color;
      //Set Massege     
      setMassage(msg);

      //Play Again
      guessBtn.value = 'Play Again';
      guessBtn.className += 'play-again';


    }

    //Get winning Number
    function getRandomNum(min, max){

        let num = (Math.floor(Math.random()*(max-min+1)+min));  
        return num;
    }



  function setMassage(msg , color){
    massage.style.color = color;
      massage.textContent = msg;

  }