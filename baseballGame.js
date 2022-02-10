
var cnt=0;
var resultNum = " ";
var ranNum1,ranNum2,ranNum3;
var userNum1,userNum2,userNum3;

function pickNumber(num){
    var tmpNum=document.getElementById(num).value;
   // console.log(document.getElementById("input_num1").innerHTML);
    //var tmpInputNum=document.getElementById("input_num");
    if( document.getElementById("input_num1").innerHTML==""){
        resultNum = tmpNum;
        document.getElementById("input_num1").innerHTML=tmpNum;
        cnt=0;
    }else if(document.getElementById("input_num2").innerHTML == ""){
        resultNum = resultNum + tmpNum;
        document.getElementById("input_num2").innerHTML=tmpNum;
        cnt++; 
    }else if(document.getElementById("input_num3").innerHTML==""){
        resultNum = resultNum + tmpNum;
        document.getElementById("input_num3").innerHTML=tmpNum;
        cnt++; 
    }   
}
//random 난 수 생성하기 
window.onload=function(){ 
    ranNum1=Math.floor((Math.random()*9)+1);
    ranNum2=Math.floor((Math.random()*9)+1);
    if(ranNum1 == ranNum2){//같은 수일 경우 다시 랜던 수 생성
        ranNum2=Math.floor((Math.random()*9)+1);
    }
    ranNum3=Math.floor((Math.random()*9)+1);
    if(ranNum1 == ranNum3 || ranNum2 ==ranNum3){//3번째 수가 두번 째나 첫 번째 수와 같다면 다시 생성 하게 한다. 
        ranNum3=Math.floor((Math.random()*9)+1);
    }
    console.log(ranNum1,ranNum2,ranNum3);
}
//random 숫자와 사용자가 입력한 숫가 같은지를 보는 함수 
function throwNumbers(){
    var tmpInt=parseInt(resultNum);
    userNum1=Math.floor(tmpInt/100);
    userNum2=Math.floor((tmpInt/10)%10);
    userNum3=Math.floor((tmpInt%100)%10);
    console.log(userNum1,userNum2,userNum3);

    if(ranNum1 == userNum1 && ranNum2 == userNum2 && ranNum3 ==userNum3){
        document.getElementById("strike").innerHTML="3 strike!!";
    }else if(ranNum1 == userNum1){
        if(ranNum2 == userNum3 && ranNum3 == userNum2){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="2 ball";
        }else if(ranNum2 == userNum2 || ranNum3 == userNum3){
            document.getElementById("strike").innerHTML="2 strike";
        }else if(ranNum2 == userNum3 || ranNum3 == userNum2){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="1 ball";
        }else{
            document.getElementById("strike").innerHTML="1 strike";
        } 

    }else if(ranNum2 == userNum2){
        if(ranNum1 == userNum3 && ranNum3 == userNum1){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="2 ball";
        }else if(ranNum1 == userNum3 || ranNum3 == userNum1){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="1 ball";
        }else if(ranNum1 == userNum1 || ranNum3 == userNum3){
            document.getElementById("strike").innerHTML="2 strike";
        }else{
            document.getElementById("strike").innerHTML="1 strike";
        } 
    }else if(ranNum3 == userNum3){
        if(ranNum1 == userNum2 && ranNum2 == userNum1){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="2 ball";
        }else if(ranNum1 == userNum2 || ranNum2 == userNum1){
            document.getElementById("strike").innerHTML="1 strike";
            document.getElementById("ball").innerHTML="1 ball";
        }else if(ranNum1 == userNum1 || ranNum2 == userNum2){
            document.getElementById("strike").innerHTML="2 strike";
        }else{
            document.getElementById("strike").innerHTML="1 strike";
        } 
    }else if(ranNum1 == userNum2 && ranNum2 == userNum3 && ranNum3==userNum1){
        document.getElementById("ball").innerHTML="3 ball";
    }else{
        document.getElementById("strike").innerHTML="no strike";
        document.getElementById("ball").innerHTML="no ball";

    }

}


