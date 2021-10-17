 

function flattening(arr){
    return arr.reduce((a,b)=>a.concat(b))
}

//let arrays = [[1, 2, 3], [4, 5], [6]];
//console.log(flattening(arrays))







function loop(value, testFunction,updateFunction,bodyFunction){
    let i = value
     while(testFunction(i)){
        bodyFunction(i)
        i =  updateFunction(i)
    }
}

//loop(3, n => n > 0, n => n - 1, console.log);


//using "some" function
function every(arr, test) { //if every == || and some == &&,using De Morgan's Law:
    return !arr.some(a => !test(a));
  }

console.log(every([1, 3, 5], n => n < 10));//true 
console.log(every([10, 30, 50], n => n < 10));//false 
console.log(every([1, 3, 50], n => n < 10));//false
console.log(every([], n => n < 10));//true





  //using a loop
  function every2(arr,test){
    for(let i = 0; i < arr.length; i++){
        if(test(arr[i]) === false ) return false
    return true
    }
}
//console.log(every2([1, 3, 16], n => n < 10));
