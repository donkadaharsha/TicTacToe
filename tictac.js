let box = Array.from(document.getElementsByClassName('box'))
  
let boxes = [...document.getElementsByClassName('box')];
  
  
  const O_TEXT="O";
  const X_TEXT="X";
  let current_player= X_TEXT
  let spaces=Array(9).fill(null)
  // console.log(spaces)
const startGame = () => {
  
  boxes.forEach(box => box.addEventListener('click',boxClicked))

}

let listX = [];
  let listO = [];
let aa=1;
function checkBox(listToCheck){
  let winner=document.getElementById('Win')
  let draw=document.getElementById('Draw')
  let hideRow1=document.getElementById('row1')
  let hideRow2=document.getElementById('row2')
  let hideRow3=document.getElementById('row3')
  let play1=document.getElementById('player1')
    let play2=document.getElementById('player2')
  
// let aa=winner.style.display;
console.log(aa)
  // let strike = document.querySelector('.box')
  let x=listO.length;
  console.log(x)
  let y=listX.length;
  if (listToCheck.includes("0") && listToCheck.includes("1") && listToCheck.includes("2")){
    let cross0 = document.getElementById('cross0')
    cross0.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // strike.style.textDecoration = 'line-through';
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("0") && listToCheck.includes("4") && listToCheck.includes("8")){
    let cross6 = document.getElementById('cross6')
    cross6.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("0") && listToCheck.includes("3") && listToCheck.includes("6")){
    let cross3 = document.getElementById('cross3')
    cross3.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("1") && listToCheck.includes("4") && listToCheck.includes("7")){
    let cross4 = document.getElementById('cross4')
    cross4.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("2") && listToCheck.includes("5") && listToCheck.includes("8")){
    let cross5 = document.getElementById('cross5')
    cross5.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  if (listToCheck.includes("2") && listToCheck.includes("4") && listToCheck.includes("6")){
    let cross7 = document.getElementById('cross7')
    cross7.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("3") && listToCheck.includes("4") && listToCheck.includes("5")){
    let cross1 = document.getElementById('cross1')
    cross1.style.display='block';
    winner.style.display = "block";
    draw.style.display='none';
    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  else if (listToCheck.includes("6") && listToCheck.includes("7") && listToCheck.includes("8")){
    winner.style.display = "block";
    draw.style.display='none';
    
    let cross2 = document.getElementById('cross2')
    cross2.style.display='block';

    aa=0;
    // hideRow1.style.display = "none";
    // hideRow2.style.display = "none";
    // hideRow3.style.display = "none";
  }
  
  else if(x+y==9 && aa===1){
    console.log("hello9")
    draw.style.display = 'block';
    winner.style.display='none';
    
    play1.style.display='none';
    play2.style.display='none';
  }
}


function boxClicked(e){
  const id=e.target.id
  
//0,1,2 0,4,8 0,3,6 1,4,7 2,5,8 2,4,6 3,4,5 6,7,8 
  const player1=document.getElementById('player1')
  const player2=document.getElementById('player2')
  if(!spaces[id]){    //spaces[id]!=null  
    
    spaces[id]=current_player
    e.target.innerText=current_player
    if(current_player==X_TEXT){
      current_player=O_TEXT;
      listX.push(id);
      checkBox(listX) 
      player2.style.display='block';
      player1.style.display='none';
    }
    else{
      current_player=X_TEXT;
      listO.push(id);
      checkBox(listO)
      player1.style.display='block';
      player2.style.display='none';
    }
    
  }
  

  // console.log("O list=", listO,"X list =", listX)
}

const startbutton = document.getElementById('myButton');

// button.addEventListener('click', function() {

//   const boxdisplay = document.querySelectorAll('.box');
//   if (boxdisplay.style.display === 'none') {
//     boxdisplay.style.display = 'block';
//   } else {
//     boxdisplay.style.display = 'none';
//   // location.reload();

//   }
// } )
startbutton.addEventListener('click', function() {
  const boxdisplay = document.querySelectorAll('.box');
  const player1=document.getElementById( 'player1')
  const restartDisplay = document.querySelector('.RestartButton')
  const startDisplay = document.querySelector('.StartButton')
  boxdisplay.forEach(function(box) {
    if (box.style.display === 'none') {
      box.style.display = 'block';
      restartDisplay.style.display = 'block';
      player1.style.display = 'block';
      startDisplay.style.display = 'none';
    } else {    
      box.style.display = 'none';
    }
  });
});
const restartbutton = document.querySelector('.RestartButton')
restartbutton.addEventListener('click',function(){
  console.log("1")
  location.reload();

})

startGame()