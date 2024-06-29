let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let turn = document.getElementById("turn")

let turnO = true; 
let currentplayer = "O";
let count = 0;
turn.innerText = `${currentplayer}'s Turn`
let gamerunning = false;
boxes.forEach(box => box.disabled = false)
const winningconditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
let options = ["","","","","","","","",""];
function gamestart(){
  boxes.forEach(box => box.addEventListener("click",() =>{
    
    if(turnO){
      box.innerHTML = "O";
      options[box.getAttribute("index")] = "O";
      
      currentplayer = "X"
      box.setAttribute("style","color : green")
      turn.innerText = `${currentplayer}'s Turn`
      turnO = false;
    }
    else{
      box.innerHTML = "X";
      options[box.getAttribute("index")] = "X";
      currentplayer = "O"
      box.setAttribute("style","color : red")
      turn.innerText = `${currentplayer}'s Turn`
      turnO = true;
    }
    checkwin();
    box.disabled =true;
  }))
}
gamestart();
function checkwin(){
  let win = false;
  for(let i=0 ; i < winningconditions.length ; i++){
    const condition = winningconditions[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    if(box1 == "" || box2 == "" || box3 == ""){
    continue;
    }
    if(box1 == box2 && box2 == box3){
      win = true;
      break;
    }
  }
  if(win){
    if(turnO)
      turn.innerText = `X has Won!`;
    else
     turn.innerText = `O has Won!`;

     boxes.forEach(box => box.disabled = true)
  }
  else if(!options.includes("")){
    turn.innerText = `DRAW!`;
  }
  
  
}
restart.onclick = () => {
  options = ["","","","","","","","",""];
  boxes.forEach(box => box.innerText = "")
  boxes.forEach(box => box.disabled = false)
  turnO = true; 
 currentplayer = "O";
turn.innerText = `${currentplayer}'s Turn`

}