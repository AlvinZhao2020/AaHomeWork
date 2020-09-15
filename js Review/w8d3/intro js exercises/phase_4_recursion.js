range = (start,end)=>{
    if(start === end){
        return []
    }

    let r = range(start,end-1);
    r.push(end);
    return r
}

console.log(`range(3, 10) = ${range(3, 10)}`);

sumRec = function(arr){
    if(arr.length===0){
        return 0
    }
    let r = sumRec(arr.slice(1,arr.length)) + arr[0]
    return r
}

console.log(`sumRec([1,2,3,4])=${sumRec([1, 2, 3, 4,10,100,1])}`)

arr = [1,2,3,4] 

// arr slice
console.log(arr.slice(1,arr.length))
console.log(arr)


exponent=(base, exp)=>{
    if(exp === 0){
        return 1
    }
    r= exponent(base,exp-1)*base
    return r
}

console.log(exponent(2,3))

fibonacci = n=>{
    let r =[0,1]
    if(n<3){
        return r.slice(0,n);
    }
    while(r.length<n){
        r.push(r[r.length-2]+r[r.length-1])
    }
    return r
}
console.log(fibonacci(10))

deepDup = arr=>{
    if(!(arr instanceof Array)){
        return arr
    }
    let res = arr.map(e=> deepDup(e))
    return res

}

console.log(deepDup([1,2,3,[4,5]]))


bsearch = (arr,target)=>{

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)
    if(arr.length===0){
        return -1
    }
    else if (arr[mid]==target){
        return mid
    }
    else if(arr[mid]>target){
  
        return bsearch(left,target)
    }
    else {  
       return  bsearch(right, target) === -1 ? -1: bsearch(right,target)+mid + 1
    }
    
}

console.log(bsearch([1,2,3,4,5,6,7,8,9,10],11))
// console.log([1,2,3,4,5].slice(0,2))

mergsort = arr=>{
    if (arr.length<=1)
     return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    let res = merge(mergsort(left),mergsort(right))
    return res
}

merge = (arr1,arr2)=>{
    let res = [];
    while(arr1.length!==0&&arr2.length!==0){
        if(arr1[0]<arr2[0]){
            res.push(arr1[0]);
            arr1 = arr1.slice(1)
        }
        else{
            res.push(arr2[0]);
            arr2 = arr2.slice(1)
        }
    }
    return res.concat(arr1,arr2)
}
// how to use Array.concat
// console.log([1,2,3].concat([4,5,6],[7,8,9]))

// how to use Array.slice
// console.log([1,2,3,4,5,6].slice(0,3))

console.log(`merge([1,3,5],[2,4,6])=${merge([1, 3, 5], [2, 4, 6])}`)
console.log(mergsort([3,2,4,1,5,2,5,6,8]))


subset = (arr)=>{
    if (arr.length===0){
        return [[]]
    }
    let result = subset(arr.slice(0,arr.length-1)).concat(subset(arr.slice(0,arr.length-1)).map((s)=>s.concat((arr[arr.length-1]))
    )
    )
    return result 
}

console.log(subset([1,2,3]))