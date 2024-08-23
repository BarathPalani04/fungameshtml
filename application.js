let numeric=Math.floor(Math.random()*100);
let count=1;

function check(){
    let a=document.getElementById("number");
    if(a.value==numeric&&count<=10){
        document.getElementById("para").innerHTML="YOU FOUND IT";
        window.location.href="./win.html"
    }
    else if(a.value>=numeric&&count<=10){
        document.getElementById("para").innerHTML="Please enter mini value";
        document.getElementById("def").innerHTML=count;
        count++;
    }
    else if(a.value<=numeric&&count<=10){
        document.getElementById("para").innerHTML="Please enter max value";
        document.getElementById("def").innerHTML=count;
        count++;
    }
    else if(a.value!=numeric&&count>10){
        document.getElementById("para").innerHTML="Your attempt finished ";
        window.location.href="./loss.html"
    }
}
    function reset(){
        location.reload();
    }


