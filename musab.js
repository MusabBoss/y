var num1 =document.getElementById("firstnum");
var num2 =document.getElementById("secondnum");
var result =document.getElementById('result')
function add(){
    document.getElementById("result").innerHTML=(parseInt(num1.value)+parseInt(num2.value))
    if(num1 === ""||num2 === ""){
        document.getElementById("result").innerHTML="insert number"
    }
}
function sub(){
    document.getElementById("result").innerHTML=(parseInt(num1.value)-parseInt(num2.value))
    if(num1 === ""||num2 === ""){
        document.getElementById("result").innerHTML="insert number"
    }
}
function mul(){
    document.getElementById("result").innerHTML=(parseInt(num1.value)*parseInt(num2.value))
    if(num1 === ""||num2 === ""){
        document.getElementById("result").innerHTML="insert number"
    }
}
function div(){
    document.getElementById("result").innerHTML=(parseInt(num1.value)/parseInt(num2.value)) 
    if(parseInt(num2.value) == 0){
        document.getElementById("result").innerHTML="Meaningless"
    }
}
var div1 = document.getElementById("content")
var display=0;
function other(){
if(display == 1){
div1.style.display = "block"
display=0;
document.getElementById("calculator").style.height="460px"
document.getElementById("calculator").style.marginTop="40px"
}
else{
    div1.style.display ="none"
    display=1
    document.getElementById("calculator").style.height="400px"
}
}

function square(){
    document.getElementById("secondnum").style.display="none"
    document.getElementById("firstnum").style.marginLeft="250px"
    var square= document.getElementById("firstnum").value;
    var result1 =parseInt(square)*parseInt(square)
    document.getElementById("result").innerHTML=result1
}
function cube(){
    document.getElementById("secondnum").style.display="none"
    document.getElementById("firstnum").style.marginLeft="250px"
    var cube= document.getElementById("firstnum").value;
    var result2 =parseInt(cube)*parseInt(cube)*parseInt(cube)
    document.getElementById("result").innerHTML=result2
}