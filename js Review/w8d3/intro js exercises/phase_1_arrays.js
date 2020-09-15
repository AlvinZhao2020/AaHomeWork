Array.prototype.uniq= function(){
    let res = [];
    this.forEach(e=>{
        if (!res.includes(e)){
            res.push(e)
        } 
    })
    return res
}

// console.log([1,1,2,2,3,3].uniq())
// arr = [1,2,3,4]
// console.log(arr.__proto__ === Array.prototype)

Array.prototype.twoSum =function(){
    let res=[];
    this.forEach((e1,i1)=>{
        this.forEach((e2,i2)=>{
            if(e1+e2===0&&i2>i1){
                res.push([i1,i2])
            }
        })
    })
    return res
}

// console.log([1,2,3,4,5,-1,-2,-3].twoSum())

Array.prototype.transpose = function(){
    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
    );

    
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());

