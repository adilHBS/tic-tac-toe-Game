let boxs = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset-btn');
let newbtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enabledboxes();
  msgcontainer.classList.add('hide');
};

boxs.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const disabledboxes = () => {
  boxs.forEach((box) => {
    box.disabled = true;
  });
};

const enabledboxes = () => {
  boxs.forEach((box) => {
    box.disabled = false;
    box.innerText = '';
  });
};

const showWinner = (winner) => {
  msg.innerText = `Player ${winner} wins!`;
  msgcontainer.classList.remove('hide');
  disabledboxes();
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;

    if (pos1val !== '' && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
      return;
    }
  }
};

newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
