var text=document.getElementById('text');
function addnum(y) {
     text.value+=y;
}
console.log(text.value);
var btn1=document.getElementById('btn1');
btn1.addEventListener('click',btnone);

function btnone() {
     var x=1;
     addnum(x);
}
var btn2=document.getElementById('btn2');
btn2.addEventListener('click',btntwo);
function btntwo() {
    var x=2;
     addnum(x);
}
var btn3=document.getElementById('btn3');
btn3.addEventListener('click',btnthree);
function btnthree() {
    var x=3;
      addnum(x);
 }
var btn4=document.getElementById('btn4');
btn4.addEventListener('click',btnfour);
function btnfour() {
    var x=4;
     addnum(x);
}
var btn5=document.getElementById('btn5');
btn5.addEventListener('click',btnfive);
function btnfive() {
    var x=5;
     addnum(x);
}
var btn6=document.getElementById('btn6');
btn6.addEventListener('click',btnsix);
function btnsix() {
    var x=6;
     addnum(x);
}
var btn7=document.getElementById('btn7');
btn7.addEventListener('click',btnseven);
function btnseven() {
    var x=7;
     addnum(x);
}
var btn8=document.getElementById('btn8');
btn8.addEventListener('click',btneight);
function btneight() {
    var x=8;
     addnum(x);
}
var btn9=document.getElementById('btn9');
btn9.addEventListener('click',btnnine);
function btnnine() {
    var x=9;
     addnum(x);
}
var btn10=document.getElementById('btn10');
btn10.addEventListener('click',btnten);
function btnten() {
    var x=".";
     addnum(x);
}
var btn0=document.getElementById('btn0');
btn0.addEventListener('click',btnzero);
function btnzero() {
    var x=0;
     addnum(x);
}
var btnr=document.getElementById('btnr');
btnr.addEventListener('click',clr);
function clr(){
    text.value="";
}

// position_change
var array=[9,8,7,6,5,4,3,2,1];
var res=document.getElementById('res');
var table=document.querySelector('.table');
function change() {
    
var length=array.length;
for( i=0; i<length; i++){
console.log(i)
}
}


res.addEventListener('click',change);
