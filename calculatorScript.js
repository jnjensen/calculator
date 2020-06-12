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
const numsSearch = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operateSearch = ["+", "-", "/", "*"];      
var curNum = [];
var curMathProblem = [];
var operation = "";

function numCreate (){
    if (this.value != "." || curNum.includes(".") == false){
        curNum.push(this.value);
        if ((curNum[0] == 0) && (curNum[1] != ".") && (curNum.length >= 2)){
            curNum.shift();
        }
        var x = curNum.join("");
        curNumView.innerHTML = x; 
    } 
}

function clear () {
    curNum = [];
    curMathProblem = [];
    operation = "";
    curNumView.innerHTML = "";
    mathProblemView.innerHTML = "";
}

function togglePosNeg (){
    if (curNum.includes("-") == true){
        curNum.shift();
        var x = curNum.join("");
        curNumView.innerHTML = x;
    }else if (((curNum[0] != 0) || (curNum.length == 3)) && (curNum.length > 0)){
        curNum.unshift("-");
        var y = curNum.join("");
        curNumView.innerHTML = y;
    }
}

function mathing (){
    var product = 0;
    var num1 = curMathProblem[0];
    var num2 = curMathProblem[2];
    if (operation == "+"){
        product = (num1 + num2);
    } else if (operation == "-"){
        product = (num1 - num2);
    } else if (operation == "/"){
        if (num2 == 0){
            return "Can't Divde By 0!";
        }
        product = (parseFloat(num1 / num2));
    } else if (operation == "*"){
        product = (num1 * num2);
    }
    return product;
}

function finalEquals (){
    var numAdd = Number(curNum.join(""));
    if ((curMathProblem.length >= 2) && (curNum.length > 0)) {
        curMathProblem.push(numAdd);
        var total = mathing();
        curNumView.innerHTML = total;
        curNum = [];
        curMathProblem = [];
        operation = "";
        mathProblemView.innerHTML = "";
    }
}

function operatorAdd (){
    var numAdd = Number(curNum.join(""));
    curMathProblem.push(numAdd);
    if (curMathProblem.length >= 3){
        var mathingNum = mathing();
        curMathProblem = [];
        curMathProblem.push(mathingNum);
    }  
    operation = this.value;
    curMathProblem.push(this.value);
    var x = curMathProblem.join(" ");
    mathProblemView.innerHTML = x;
    curNum = [];
}

function usingKeys (event){
    var idx = event.key;
    console.log(idx);
    if (numsSearch.includes(idx) == true){
        if (idx != "." || curNum.includes(".") == false){
            curNum.push(idx);
            if ((curNum[0] == 0) && (curNum[1] != ".") && (curNum.length >= 2)){
                curNum.shift();
            }
            var x = curNum.join("");
            curNumView.innerHTML = x; 
        } 
    }else if (operateSearch.includes(idx) == true){
        var numAdd = Number(curNum.join(""));
        curMathProblem.push(numAdd);
        if (curMathProblem.length >= 3){
            var mathingNum = mathing();
            curMathProblem = [];
            curMathProblem.push(mathingNum);
        }  
        operation = idx;
        curMathProblem.push(idx);
        var y = curMathProblem.join(" ");
        mathProblemView.innerHTML = y;
        curNum = [];
    }else if (idx == "Enter"){
        finalEquals();
    }else if ((idx == "Delete") || (idx == "Backspace")){
        clear();
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
divBtn.addEventListener("click", operatorAdd);
mulBtn.addEventListener("click", operatorAdd);
addBtn.addEventListener("click", operatorAdd);
subBtn.addEventListener("click", operatorAdd);
equalBtn.addEventListener("click", finalEquals);
document.addEventListener("keydown", usingKeys);
