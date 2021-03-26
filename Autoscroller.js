var speed = 2;
var Sheight;
var c = 0;
var caller;
var f = 1;

document.body.onclick = clicking;

function callerr (){ 
    caller = setInterval(scrolling,speed);
}

function scrolling(){
    Sheight = document.body.scrollHeight;
    c = c + 1;
    if(c == Sheight){
        clearInterval(caller);
    }
    scrollTo(0,c);
}

function clicking(){
    console.log("cscscscsc");
    if(f == 0){
        clearInterval(caller);
        f = 1;
    }
    else{
        callerr();
        f = 0;
    }
}
