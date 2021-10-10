const minValue = (value1,value2) => value1 < value2 ? value1 : value2


//console.log(minValue(0,10)) //0
//console.log(minValue(0,-10)) //-10



function recursion (x){
    let value = x > 1 ? recursion(x-2) : x
    return value
}


function isEven(value){
    const parity = recursion(value)
    if (parity < 0) return null
    return parity === 1 ? false : true
}

//console.log(isEven(20)) //true
//console.log(isEven(-1)) //null
//console.log(isEven(75)) //false


const countBs = function(word){
    return countChar(word,"B")
}

const countChar = function(word,letter){
    let count = 0
    for (let i = 0;i < word.length;i++){
        if(word[i] === letter)count++
    }
    return count 
}


console.log(countBs("BSBSBSBS")) //4
console.log(countChar("BSBSBSBSS","S")) //5

 


