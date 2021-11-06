const  filterProperties  = require('../lib/exercicio1')

test('Array with some od the  properties of the object',()=>{
    const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
    const props = ['b', 'd', 'g', 'a']
    const oFiltered = filterProperties(props, o)
    expect(oFiltered).toEqual({a: 1, b: 'Thor', d: {x: 10}})
})


test('Empty array',()=>{
    const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
    const props = []
    const oFiltered = filterProperties(props, o)
    expect(oFiltered).toEqual({})
})

test('Array with all properties of the object',()=>{
    const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
    const props = ['b', 'd', 'g', 'a','c','d','e','f']
    const oFiltered = filterProperties(props, o)
    expect(oFiltered).toEqual(o)
})



