class node{
 constructor(value){
    this.value = value
    this.next = null
 }
}

function arrayToList(array){
    if(array.length == 0 ) throw 'Empty Array'
    let head = new node(array[0])
    let curr = head
    for(let i = 1; i< array.length; i++){
        curr.next = new node(array[i])
        curr = curr.next
    }
    return head
}

function listToArray(list){
    if(list == null) throw 'Empty List!'
    auxArray = []
    while(list != null){
        auxArray.push(list.value)
        list = list.next
    }
    return auxArray
}

function prepend(value,list){
    head = new node(value)
    head.next = list
    return head
}

function nth(lst,postion){
    if(lst == null || postion < 0 )return undefined
    return postion == 0 ? lst.value : nth(lst.next,postion -1)
}
arr = [1,2,3]

//Array to list test
lst = arrayToList(arr)
console.log(JSON.stringify(lst))

//prepend test
lst2 = prepend(0,lst)
//console.log(JSON.stringify(lst2))

//nth test
console.log(nth(lst,4))

//list to array test
//console.log(listToArray(arrayToList([10, 20, 30])));


