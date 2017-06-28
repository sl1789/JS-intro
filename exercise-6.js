let sq = function (x){
    this.val=Math.pow(x,2);
};

let s = new sq(5);

console.log(s.val);
console.log(s);
console.log(sq);
