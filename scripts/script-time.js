var count = new Number();
count = 60;

function start(){
    if((count - 1) >= 0){
        count = count - 1;
        setTimeout('start();', 1000);
    }
}