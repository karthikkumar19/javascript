var scores, roundScore, activePlayer, dice, gamePlaying;



// document.querySelector('#current-1').innerHTML = '<h6>hello</h6>'
init();

function nxtplayer (){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.dice2').style.display ='none';
}

function btn(){
   if(gamePlaying){
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;
      document.querySelector('.dice').style.display = 'block';
      document.querySelector('.dice').src = 'dice-' + dice1 + '.png';
      document.querySelector('.dice2').style.display = 'block';
      document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';

  

    if(dice1 != 1 && dice2 != 1){
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
   }
   else{
     nxtplayer();
   }
   lastdice = dice;
   }
}

function hold(){
   if(gamePlaying){
      scores[activePlayer] += roundScore;

      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      var input = document.querySelector('.final-score').value;
      var winningScore;

      if(input){
         winningScore = input;
      }else{
         winningScore = 100;
      }
   
      if(scores[activePlayer] >= winningScore){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.dice2').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
      }else{
         nxtplayer();
      }
   } 
}

function init(){
   scores=[0,0];
   roundScore=0;
   activePlayer=0;dummy=0;
   gamePlaying = true;

   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.dice2').style.display ='none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-hold').addEventListener('click',hold);
document.querySelector('.btn-new').addEventListener('click',init);