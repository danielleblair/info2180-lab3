window.onload= function() {
    styleSquare();
    insertingXandO();

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

        }
    });
    var gameStatus = document.getElementById("status");
    box.addEventListener('mouseover', function hoveringBoxon(){
        if ((box.className=="square")){
            box.className = "hover";
        }
        
    });
    box.addEventListener('mouseout', function hoveringBoxoff(){
       if (box.className == "hover")
        box.className = "square";
    });
    }
}


