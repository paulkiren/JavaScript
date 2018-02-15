let P =53,R=59;
const n = P*R;
const d,e=3, k=2;
function createPublicKey(n,e) {
    return (P-1)*(r-1);
}
function privateKey(k,e) {
    d= (k*createPublicKey(n,e))/e;
    return d;
}
function fact(x) {
    if(x==0) {
       return 1;
    }
    return x * fact(x-1);
 }
 
function encrypt(value) {
    console.log("Value = ",value);

let kiren = fact(value,e);
    console.log("Value = ",kiren);
}

function decrypt(value) {
    
}