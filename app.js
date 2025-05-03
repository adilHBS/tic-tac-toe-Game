let boxs = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset-btn');

let turnO =true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O' 
            turnO = false
            checkWin();
        }else {
            box.innerText = 'X'
            turnO = true
            checkWin();
        }
        box.disabled = true;
        checkWin();
    })
}   )

const checkWin = () => {
    for (let Patterns of winPatterns) {
        let  pos1val = Patterns[0]
        let  pos2val = Patterns[1]      
        let  pos3val = Patterns[2]
        if (boxs[pos1val].innerText === boxs[pos2val].innerText && boxs[pos1val].innerText === boxs[pos3val].innerText && boxs[pos1val].innerText !== '') {
            alert(`Player ${boxs[pos1val].innerText} wins!`)
            resetGame()
        }
        const [a, b, c] = Patterns;
        if (boxs[a].innerText === boxs[b].innerText && boxs[a].innerText === boxs[c].innerText && boxs[a].innerText !== '') {
            alert(`Player ${boxs[a].innerText} wins!`)
            resetGame()
        }
    }
    ) {
}