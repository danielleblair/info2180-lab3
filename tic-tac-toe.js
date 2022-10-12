window.onload= function() {
    styleSquare();

}


function styleSquare() {

        var loadsquare = document.getElementById("board");
        var sqdivs = loadsquare.getElementsByTagName("div");
    
        for(var i=0; i<sqdivs.length; i++) {
            sqdivs[i].className = "square";
            sqdivs[i].id = "id"+i;        
        }

}


