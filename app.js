let boardColor = 'black';

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    let h2 = document.createElement('h2');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    let amount = size * size;
    
    for(let i = 0;i<amount;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorSquare)
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend',square);
    }
}



function changeBoardSize(input){
    if(input >= 2 || input <= 100){
        populateBoard(input);
    } else{
        console.log('Too many squares or less squares')
    }
}

function colorSquare(){
        this.style.backgroundColor = boardColor;
}

function changeColor(color){
    boardColor = color
}