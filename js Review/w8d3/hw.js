madlib =(verb,adj,n) =>{
    console.log(`we shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${n.toUpperCase()}`)
}

// madlib('make','awesome','hw')


isSubstring = function (str, sub){
    console.log(str.includes(sub)) 
}

// isSubstring("time to program", "times")


fizzbuzz = (arr)=>{
    let res=[];
    arr.forEach(e => {
        if ((e%3===0||e%5===0)&&(e%15!==0)){
            res.push(e)
        }
    });
    return res
}

// console.log(fizzbuzz([3,5,15,6,20,30]))

isPrime =(n)=>{
    if(n<2){
        return false
    }
    if(n===2){
        return true
    }
    for(let i=2;i<n;i++){
        if (n%i===0){
            return false
        }
    }
    return true
}

// console.log(isPrime(11))


sumOfNPrimes =(n)=>{
    let arr = []
    let i = 2;
    while (arr.length<n){  
        if (isPrime(i)) arr.push(i) 
        i++;
    }
    let sum=0;
    arr.forEach(e=>sum+=e)
    console.log(sum)
}

sumOfNPrimes(0);
sumOfNPrimes(1);
sumOfNPrimes(100);