var acc = undefined;
var op = '';
function funNum(i){
    let num = document.getElementById("num");
    let n = num.value;
    if(n ==="0"){
        n = `${i}`;
    }else{
        n = n + `${i}`; 
    }
    document.getElementById("num").value=n;
}


function funOperator(str){
    let num = parseFloat(document.getElementById("num").value);
    if (acc === undefined) acc = num;
    document.getElementById("num").value = 0;  
   
    if(str!=="="){
        if (str === "+"){
            op = '+';
        }
        else if(str ==="-"){
            op = '-';
        }
        else if(str === "x"){
            op = '*';
        }
        else if(str === "/") {
            op = '/';
        }
        else if(str ==="%"){
            op = '%';
        }
    }
    else{
        if (op === '+') {
            acc += num
            document.getElementById("num").value = acc;
        }
        else if (op === '-') {
            acc -= num
            document.getElementById("num").value = acc;
        } else if (op === '*') {
            acc *= num
            document.getElementById("num").value = acc;
        } else if (op === '/') {
            acc /= num
            document.getElementById("num").value = acc;
        } else if (op === '%') {
            acc %= num
            document.getElementById("num").value = acc;
        }
    }
   
}


function reset(){
    document.getElementById("num").value = 0;
    acc = undefined;
}

function getReverse(){
    let num = document.getElementById("num").value;
    num = -num;
    document.getElementById("num").value = num;
    
}

function dele(){
    let num = document.getElementById("num");
    let n = num.value;
    if (n.length>1){
        n = n.substr(0,(n.length-1));
    }else{
        n= "0";
    }
    document.getElementById("num").value = n;
}

function dot(){
    let num = document.getElementById("num").value;
    if(!num.includes(".")){
        num += ".";
    }
    document.getElementById("num").value = num;
}