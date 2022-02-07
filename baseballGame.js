
var cnt=0;
var resultNum = " ";
var ranNum1,ranNum2,ranNum3;
var userNum1,userNum2,userNum3;

function pickNumber(num){
    var tmpNum=document.getElementById(num).value;
    //var tmpInputNum=document.getElementById("input_num");
    if(resultNum == " "){
        resultNum = tmpNum;
        document.getElementById("input_num").innerHTML=resultNum;
        cnt=0;
    }else{
        resultNum = resultNum + tmpNum;
        document.getElementById("input_num").innerHTML=resultNum;
        cnt++;
    }

    if(cnt == 3){
        alert("3자리 까지만 입력 가능!");//확인을 누르고 버튼이 눌리지 않게 하기 
    }

   
}
//random 난 수 생성하기 
window.onload=function(){
    ranNum1=Math.floor((Math.random()*9)+1);
    ranNum2=Math.floor((Math.random()*9)+1);
    ranNum3=Math.floor((Math.random()*9)+1);
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
        document.getElementById("strike").innerHTML="strike!!";
    }

}


