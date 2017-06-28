

function factorial(x){
    let f=1;
    if(x==0){return 1;}
    else{
        f=x*factorial(x-1);
        return f;
    }
}

function check(x){
    if (typeof x === 'number'){
        if(x>=0 && x<=100){
            y=Math.floor(x);
            console.log(factorial(y));
        }else{
            console.log("Number given is invalid");
        }
    }else{
        console.log("Input given is not a number");
    }
}

var a = 5;
var b = -2;
var c = "hi";
var d = 1.54;
check(a);
check(b);
check(c);
check(d);
check(a-2);
