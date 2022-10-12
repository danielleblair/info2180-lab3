window.onload= function() {
    styleSquare();
    insertingXandO();
    getWinner();
    reloadGame();

}


function styleSquare() {

        var loadsquare = document.getElementById("board");
        var sqdivs = loadsquare.getElementsByTagName("div");
    
        for(var i=0; i<sqdivs.length; i++) {
            sqdivs[i].className = "square";
            sqdivs[i].id = "id"+i;        
        }

}

let choices = 9;
const entries = {id0:"", id1:"", id2:"", id3:"", id4:"", id5:"", id6:"", id7:"", id8:""};

function insertingXandO(){
    const boxes1 = document.getElementsByClassName('square');
   
    for (const box of boxes1) { 
    box.addEventListener('click', function selectChoice(){
        if ((choices>0) && ((choices%2)!=0) && (box.className=="hover")){
            box.className= "square X";
            box.textContent = "X";

            for (const key in entries){
                if (box.id == key){
                    entries[key] = "X";
                }
            }

            choices= choices - 1;
            getWinner();
        }
        else if ((choices>0) && ((choices%2)==0) && (box.className=="hover")){
            box.className= "square O";
            box.textContent = "O";

            for (const key in entries){
                if (box.id == key){
                    entries[key] = "O";
                }
            }

            choices= choices -1 ;
            getWinner();
        }
    });
    var gameStatus = document.getElementById("status");
    box.addEventListener('mouseover', function hoveringBoxon(){
        if ((box.className=="square") && (gameStatus.className!="you-won")){
            box.className = "hover";
        }
        
    });
    box.addEventListener('mouseout', function hoveringBoxoff(){
       if (box.className == "hover")
        box.className = "square";
    });
    }
}

function getWinner(){

    var winstatus = document.getElementById("status");

    if (((entries['id0']=="X") && (entries['id1']=="X") && (entries['id2']=="X")) ||
    ((entries['id3']=="X") && (entries['id4']=="X") && (entries['id5']=="X")) ||
    ((entries['id6']=="X") && (entries['id7']=="X") && (entries['id8']=="X")) ||
    ((entries['id0']=="X") && (entries['id3']=="X") && (entries['id6']=="X")) ||
    ((entries['id1']=="X") && (entries['id4']=="X") && (entries['id7']=="X")) ||
    ((entries['id2']=="X") && (entries['id5']=="X") && (entries['id8']=="X")) ||
    ((entries['id0']=="X") && (entries['id4']=="X") && (entries['id8']=="X")) ||
    ((entries['id2']=="X") && (entries['id4']=="X") && (entries['id6']=="X"))){
  
        winstatus.textContent = "Congratulations! X is the Winner!";
        winstatus.className = "you-won";
        choices = 0;

    }
    else if (((entries['id0']=="O") && (entries['id1']=="O") && (entries['id2']=="O")) ||
    ((entries['id3']=="O") && (entries['id4']=="O") && (entries['id5']=="O")) ||
    ((entries['id6']=="O") && (entries['id7']=="O") && (entries['id8']=="O")) ||
    ((entries['id0']=="O") && (entries['id3']=="O") && (entries['id6']=="O")) ||
    ((entries['id1']=="O") && (entries['id4']=="O") && (entries['id7']=="O")) ||
    ((entries['id2']=="O") && (entries['id5']=="O") && (entries['id8']=="O")) ||
    ((entries['id0']=="O") && (entries['id4']=="O") && (entries['id8']=="O")) ||
    ((entries['id2']=="O") && (entries['id4']=="O") && (entries['id6']=="O"))){

        winstatus.textContent = "Congratulations! O is the Winner!";
        winstatus.className = "you-won";
        choices = 0;
    }
        
        
}

function reloadGame(){

     let newgamebtn = document.querySelector(".btn");
     newgamebtn.addEventListener('click', function newgamesq (){
         var loadsquare1 = document.getElementById("board");
         var sqdivs1 = loadsquare1.getElementsByTagName("div");
     
         for(var i=0; i<sqdivs1.length; i++) {
             sqdivs1[i].className = "square";
             sqdivs1[i].textContent = "";
         }
 
         choices = 9;
 
         var statusgame = document.getElementById("status");
         statusgame.textContent = "Move your mouse over a square and click to play an X or an O.";
         statusgame.classList.remove("you-won");
         for (const key in entries){
                 entries[key] = "";
             
         }
 
     });
 
     
 }


