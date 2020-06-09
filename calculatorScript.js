const curNumView = document.querySelector("#currentNumber");
const mathProblemView = document.querySelector("#currentMathProblem");
const clearBtn = document.querySelector("#reset");
const divBtn = document.querySelector("#divide");
const mulBtn = document.querySelector("#multiply");
const subBtn = document.querySelector("#subtract");
const nineBtn = document.querySelector("#nine");
const eightBtn = document.querySelector("#eight");
const sevenBtn = document.querySelector("#seven");
const addBtn = document.querySelector("#add");
const sixBtn = document.querySelector("#six");
const fiveBtn = document.querySelector("#five");
const fourBtn = document.querySelector("#four");
const threeBtn = document.querySelector("#three");
const twoBtn = document.querySelector("#two");
const oneBtn = document.querySelector("#one");
const posNegBtn = document.querySelector("#posNeg");
const zeroBtn = document.querySelector("#zero");
const decBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equals");       
var curNum = [];
var curMathProblem = "";
var opeartion = "";

function numCreate (){
    if (this.value != "." || curNum.includes(".") == false){
        curNum.push(this.value);
        var x = curNum.join("");
        curNumView.innerHTML = x; 
    } 
}

function clear () {
    curNum = [];
    curMathProblem = "";
    operation = "";
    curNumView.innerHTML = "";
    mathProblemView.innerHTML = "";
}

function togglePosNeg (){
    if (curNum.includes("-") == true){
        curNum.shift();
        var x = curNum.join("");
        curNumView.innerHTML = x;
    }else{
        curNum.unshift("-");
        var y = curNum.join("");
        curNumView.innerHTML = y;
    }
}

oneBtn.addEventListener("click", numCreate);
twoBtn.addEventListener("click", numCreate);
threeBtn.addEventListener("click", numCreate);
fourBtn.addEventListener("click", numCreate);
fiveBtn.addEventListener("click", numCreate);
sixBtn.addEventListener("click", numCreate);
sevenBtn.addEventListener("click", numCreate);
eightBtn.addEventListener("click", numCreate);
nineBtn.addEventListener("click", numCreate);
zeroBtn.addEventListener("click", numCreate);
decBtn.addEventListener("click", numCreate);
clearBtn.addEventListener("click", clear);
posNegBtn.addEventListener("click", togglePosNeg);
