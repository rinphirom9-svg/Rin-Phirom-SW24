
var intervalId = null;
var isRuning = false;

function GenerateNumber(){
if( ! isRuning){
    // Star lopp
    intervalId = setInterval(()=>{
   for(let i = 1; i<=5; i++){
     var random=Math.floor(Math.random()*100) ;
    document.getElementById("n"+i).innerHTML=random;
   }
    },100);
    document.getElementById("Btn").innerHTML = "stop";
    isRuning = true;
}else{
    // Stop Loop
    clearInterval(intervalId);
    document.getElementById("Btn").innerHTML = "Start"
    isRuning = false;
}

    
}