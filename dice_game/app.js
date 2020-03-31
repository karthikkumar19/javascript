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
}

function btn(){
   if(gamePlaying){
      var dice = Math.floor(Math.random() * 6) + 1;
      var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';
   if(dice != 1){
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
   }
   else{
     nxtplayer();
   }
   }
}

function hold(){
   if(gamePlaying){
      scores[activePlayer] += roundScore;

      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
      if(scores[activePlayer] >= 20){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner';
         document.querySelector('.dice').style.display = 'none';
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
   activePlayer=0;
   gamePlaying = true;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-hold').addEventListener('click',hold);
document.querySelector('.btn-new').addEventListener('click',init);