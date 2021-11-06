"use strict"

module.exports = filterProperties


/**********exercicio 1********** */

// time complexity O(n^2)
/*
function filterProperties(name,obj){
    console.log("implementation1")
    const atrb_obj = Object.keys(obj);
    let aux = {};

    atrb_obj.forEach(element => {
        if(name.includes(element))
          aux[element] = obj[element]
    });
        return aux
}
*/

 function filterProperties(name,obj){//Time complexity O(nlog(n))
  name = quickSort(name,0,name.length-1) 
  const atrb_obj = Object.keys(obj)
  let aux = {};

  atrb_obj.forEach(element => {
      if(binarySearch(name,element) !== -1)
          aux[element] = obj[element]
  });
  return aux
}


function quickSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
     
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  

  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }


  function binarySearch(items, value){
    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        middle = Math.floor((stopIndex + startIndex)/2);
    }

    return (items[middle] != value) ? -1 : middle;
}




  





