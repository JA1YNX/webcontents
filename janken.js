const element = name => document.querySelector(name);
const strings = ['グー', 'チョキ', 'パー'];
const outcomes = {
  draw: 'あいこ',
  win: 'お前の勝ち～',
  lose: 'お前の負け～'  
}
let playersHandNum, botsHandNum;
const botsHandProcess = () => {
  botsHandNum = Math.floor(Math.random() * 3);
  element('#enemyHand').innerText = strings[botsHandNum];
};

const processHands = (botsHandNum, playersHandNum) => {
  if (playersHandNum === botsHandNum) return outcomes.draw;
  else if (
    (playersHandNum === 0 && botsHandNum === 1) ||
    (playersHandNum === 1 && botsHandNum === 2) ||
    (playersHandNum === 2 && botsHandNum === 0)
  ) return outcomes.win;
  else return outcomes.lose;
};

class PlayersHands {
  constructor(elementName, handNum) {
    this.elementName = elementName;
    this.handNum = handNum;
    element(this.elementName).addEventListener('click', () => {
      playersHandNum = this.handNum;
      botsHandProcess();
      element('#result').innerText = processHands(botsHandNum, playersHandNum)
      element('#playerHand').innerText = strings[this.handNum];
    });
  }
}

const rock = new PlayersHands('#rock', 0);
const scissor = new PlayersHands('#scissor', 1);
const paper = new PlayersHands('#paper', 2);
