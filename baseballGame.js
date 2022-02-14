
var cnt=0;
var resultNum = " ";
var ranNum1,ranNum2,ranNum3;
var userNum1,userNum2,userNum3;
var userInputNum = [];

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

function pickNumber(num){// 이벤트 함수는 함수 이름+ 무슨이벤트  pick 잘 안쓴다. 대신 select 를 쓴다. 
    var tmpNum=document.getElementById(num).value;
    var NumONe=document.getElementById("inputNum1");
    var NumTwo=document.getElementById("inputNum2");
    var NumTree=document.getElementById("inputNum3");
    userInputNum[cnt] = tmpNum;
    if(cnt == 0){
        NumONe.innerHTML= userInputNum[cnt];
        cnt++;
    }else if(cnt == 1){
        NumTwo.innerHTML = userInputNum[cnt];
        cnt++;
    }else if(cnt == 2){
        NumTree.innerHTML = userInputNum[cnt];
        cnt++;
    }
}
//random 숫자와 사용자가 입력한 숫가 같은지를 보는 함수 
function throwNumbers(){//함수 이름  지금 처럼 하면 알아 보지 않는다. 
    var tmpInt=parseInt(resultNum);
    userNum1=Math.floor(tmpInt/100);
    userNum2=Math.floor((tmpInt/10)%10);
    userNum3=Math.floor((tmpInt%100)%10);
    console.log(userNum1,userNum2,userNum3);

    if(ranNum1 == userNum1 && ranNum2 == userNum2 && ranNum3 ==userNum3){
        document.getElementById("scoreH2").innerHTML="3 strike!!";
        // document.getElementById("win_out").innerHTML="win! win! win! ";
    }else if(ranNum1 == userNum1){
        if(ranNum2 == userNum3 && ranNum3 == userNum2){
            document.getElementById("scoreH2").innerHTML="1 strike 2 ball";
        }else if(ranNum2 == userNum2 || ranNum3 == userNum3){
            document.getElementById("scoreH2").innerHTML="2 strike";
        }else if(ranNum2 == userNum3 || ranNum3 == userNum2){
            document.getElementById("scoreH2").innerHTML="1 strike 1 ball";
        }else{
            document.getElementById("scoreH2").innerHTML="1 strike";
        } 

    }else if(ranNum2 == userNum2){
        if(ranNum1 == userNum3 && ranNum3 == userNum1){
            document.getElementById("scoreH2").innerHTML="1 strike 2 ball";
        }else if(ranNum1 == userNum3 || ranNum3 == userNum1){
            document.getElementById("scoreH2").innerHTML="1 strike 1 ball";
        }else if(ranNum1 == userNum1 || ranNum3 == userNum3){
            document.getElementById("scoreH2").innerHTML="2 strike";
        }else{
            document.getElementById("scoreH2").innerHTML="1 strike";
        } 
    }else if(ranNum3 == userNum3){
        if(ranNum1 == userNum2 && ranNum2 == userNum1){
            document.getElementById("scoreH2").innerHTML="1 strike 2 ball";
        }else if(ranNum1 == userNum2 || ranNum2 == userNum1){
            document.getElementById("scoreH2").innerHTML="1 strike 1ball";
        }else if(ranNum1 == userNum1 || ranNum2 == userNum2){
            document.getElementById("scoreH2").innerHTML="2 strike";
        }else{
            document.getElementById("scoreH2").innerHTML="1 strike";
        } 
    }else if(ranNum1 == userNum2 && ranNum2 == userNum3 && ranNum3==userNum1){
        document.getElementById("scoreH2").innerHTML="3 ball";
    }else{
        document.getElementById("scoreH2").innerHTML="no strike no ball";
        document.getElementById("scoreH2").innerHTML="no ball";
        // document.getElementById("win_out").innerHTML="you are out!";
        
       
    }
    // 비워 주는 로직 3줄 추가  resultNum="" 추가 변수 3개로 만드는 것을 좋다. 

}
// function deletBotton(){
//     document.getElementById("input_num1").innerHTML=" ";
//     document.getElementById("input_num2").innerHTML=" ";
//     document.getElementById("input_num3").innerHTML=" ";
//     resultNum=" ";
    
// }