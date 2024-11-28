// Rulyanda Melsya Coding challenge 2024
// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
    if(num > 0){
        return -num;  
    } 
    return num;
}

console.log(makeNegative(42));
console.log(makeNegative(-2));
console.log(makeNegative(0));