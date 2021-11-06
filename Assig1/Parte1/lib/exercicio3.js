
module.exports = Array.prototype.zip
//exercicio 3

Array.prototype.zip = function(arr,condition){
    const size = this.length > arr.length ? arr.length : this.length
    let afterFunction = []
    for (let i = 0; i < size;i++){
        afterFunction.push(condition(this[i],arr[i]))
    }
    return afterFunction
  }
  
  
  
  