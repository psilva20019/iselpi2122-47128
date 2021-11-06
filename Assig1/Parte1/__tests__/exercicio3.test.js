const  zip  = require('../lib/exercicio3')

test('Same sizes',()=>{
    expect([1,2,3].zip([4,5,6], function(left, right) { return left + right})).toEqual([5,7,9])
})
test('Different sizes',()=>{
    expect( [1,2,3].zip([4,5,6,7,8], (left, right) => left + right)).toEqual([5,7,9])
})
test('Different sizes 2',()=>{
    expect( [1,2,3].zip([4,5], (left, right) => left + right) ).toEqual([5,7])
})
test('Empty array',()=>{
    expect([1,2,3].zip([], (left, right) => left + right)).toEqual([])
})
test('Empty array 2',()=>{
    expect([].zip([1,2,3], (left, right) => left + right)).toEqual([])
})


