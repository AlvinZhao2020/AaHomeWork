const NUMS = [1,2,3,4,5]

Array.prototype.myEach = function(cb){
    this.forEach(e=>cb(e))
}

// NUMS.myEach((num) => {
//     console.log(`square of ${num} is ${num * num}`);
// });


Array.prototype.myMap = function(cb){
    let res =[]
    this.myEach(el=>res.push(cb(el)))
    return res;
}


// console.log(NUMS.myMap(num => num * num));


Array.prototype.myReduce = function(cb,n){
    let arr = this;
    if (n === undefined){
        n= arr[0]
        arr = this.slice(1);
    }
    let res = n
    arr.myEach(el=>{
        res = cb(res,el)
    })
    return res
}

console.log(NUMS.myReduce((total, item) => total + item));