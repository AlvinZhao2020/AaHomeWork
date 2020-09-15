const Nums = [3,2,1,5,4]


Array.prototype.bubbleSort = function(){
    let isSorted = false 
    while(!isSorted){
        isSorted = true
        for(let i = 0; i<this.length -1 ; i++){
            if(this[i]> this[i+1]){

// swap in Array
                [this[i],this[i+1]] = [this[i+1],this[i]]
                isSorted= false;
            }
        }
    }
    return this
}

console.log(Nums.bubbleSort())

String.prototype.substring = function(){
    res = []
    for(let i = 0; i<this.length;i++){
        for(let j = i+1;j<=this.length;j++){
            res.push(this.slice(i,j))
        }
    }
    return res
}

console.log('hello'.substring())
// how slice works
console.log('hello'.slice(0,1)) 
