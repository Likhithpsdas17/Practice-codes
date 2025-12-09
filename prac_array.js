
// let array = [1,2,3,4,5];
// let result = array.map((num)=>{
//    return num*10;
// });
// console.log(array,result);



// let result = array.filter((num)=>{
//     return num%2==1;
// });
// console.log(result);

// let sum=array.reduce(function(accumulate,sum){
//     accumulate=accumulate+sum;
//     return accumulate;
// },0)
// console.log(sum);

// let product=array.reduce(function(prod,num){
//     prod=prod*num;
//     return prod;
// },1)
// console.log(product);

// traditional way 

// let array = [1,2,3,4,5];
// let product=1;
// for(let i=0;i<array.lenth;i++){
//     product=product*array[i];
// }
// console.log(product);

const array = [1,2,3,4,5,6];
const result = array.filter(num=>{
    return num%2===0;
}).map(num=>{
    return num*num;
}).reduce((acc,sum)=>{
    acc=acc+sum;
    return acc;
},0);
console.log(result);