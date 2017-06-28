function sum(A){
    let s=0;
    for(let i=0; i<A.length;i++){
        s+=A[i];
    }
    return s;
}

var Arr = [1,19,72,8,27,33];
console.log(sum(Arr));
