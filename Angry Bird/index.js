var ba_x = 100;
var ba_y = 300;
var speed = 0;
var pt = 0;
var rt = 0;
var d = 0;
var throwID=0;
var throwstep=0;

function dw() {
    pt = new Date().getTime();

}

function start1() {
    rt = new Date().getTime();
    d = rt - pt;
    speed = d / 100;
    brID = setInterval(brAnimation, 50);
}
var brID = 0;

function brAnimation() {
    // ba_x=ba_x+10;
    document.getElementById("ball").style.marginLeft = ba_x + "px";
    ba_x = ba_x + speed;
}

var xpath = [100, 114, 128, 140, 152, 166, 178, 192, 208, 227, 243, 259, 280, 300, 319, 333, 349, 364, 381, 402, 419, 437, 455, 471, 493, 499, 514, 541, 561, 583, 606, 628, 642, 666, 678, 697, 714, 737, 769, 785, 807, 828, 842, 853, 865, 883, 896, 907, 924, 935, 951, 964, 979, 996, 1009, 1018];
var ypath = [300, 285, 272, 260, 252, 243, 233, 226, 215, 208, 201, 196, 188, 181, 173, 168, 165, 163, 159, 157, 156, 155, 158, 160, 168, 168, 177, 186, 194, 203, 213, 223, 234, 246, 255, 263, 272, 292, 313, 326, 339, 350, 350, 336, 319, 302, 287, 276, 266, 269, 284, 297, 312, 329, 348, 363];

function dr1(event) {
    if (event.x > 200 | event.y < 300) {

        document.getElementById("ball").style.marginLeft = 200 + "px";
        document.getElementById("ball").style.marginTop = 300 + "px";
    } else {


        document.getElementById("ball").style.marginLeft = (event.x - 35) + "px";
        document.getElementById("ball").style.marginTop = (event.y - 25) + "px";
    }
}

function drStop(event) {
    throwstep=0;
   throwID=setInterval(throw1,50)
}
function throw1(){
        document.getElementById("ball").style.marginLeft = xpath[throwstep]+ "px";
        document.getElementById("ball").style.marginTop = ypath[throwstep]+ "px";
            throwstep=throwstep+1;
            if(throwstep===58){
                clearInterval(throwID);
            }
}

