var speed = 2;
var Sheight;
var c = 0;
var caller;

function scrolling(){
    Sheight = document.body.scrollHeight;
    c = c + 1;
    console.log(c,Sheight);
    if(c == Sheight){
        clearInterval(caller);
    }
    scrollTo(0,c);
}

caller = setInterval(scrolling,speed);