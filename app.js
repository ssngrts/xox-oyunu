const cells= document.querySelectorAll(".cell");
const message= document.getElementById("msg");

let currentPlayer= "X";
let gameBoard= ["", "", "", "", "", "", "", "", ""];
let gameIsOver= false;

function checkWin(){
    const winPatterns= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let pattern of winPatterns){
        const [a,b,c]= pattern;
        if(
            gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]
        ){
            gameIsOver= true;
            message.textContent= `${currentPlayer} KAZANDI`;

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            return;
        }
    }

    if(!gameBoard.includes("")){
        gameIsOver= true;
        message.textContent= " ! OYUN BERABERE !";
    }
}

function move(cellIndex){
    if(!gameBoard[cellIndex] && !gameIsOver){
        gameBoard[cellIndex]= currentPlayer;
        cells[cellIndex].textContent= currentPlayer;
        cells[cellIndex].classList.add(currentPlayer);

        checkWin();

        currentPlayer= currentPlayer === "X" ? "O" : "X"
    }
}

function restartGame(){
    currentPlayer= "X";
    gameBoard= ["", "", "", "", "", "", "", "", ""]
    gameIsOver= false;
    message.textContent= "";

    cells.forEach((cell)=>{
        cell.textContent= "";
        cell.classList.remove("win", "X", "O");
    })
}