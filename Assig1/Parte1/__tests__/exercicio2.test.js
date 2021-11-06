const  filterPropertiesN  = require('../lib/exercicio2')

test('exercicio 2',()=>{
    const objs = [
        {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
        {x: 'Vision', y: false}
     ]
     
     const props = ['b', 'd', 'g', 'a']
     const objsFiltered = filterPropertiesN(props, objs)
    expect(objsFiltered).toEqual([
        {a: 1, b: 'Thor', d: {x: 10}},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
        { }])
})


test('Empty array props',()=>{
    const objs = [
        {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
        {x: 'Vision', y: false}
     ]
     
     const props = []
     const objsFiltered = filterPropertiesN(props, objs)
    expect(objsFiltered).toEqual([{},{},{}])
})


test('Empty array objs',()=>{
     const objs = []
     const props = ['b', 'd', 'g', 'a']
     const objsFiltered = filterPropertiesN(props, objs)
    expect(objsFiltered).toEqual([])
})

test('Array props with all properties ',()=>{
    const objs = [
        {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
        {x: 'Vision', y: false}
     ]
    const props = ['b', 'd', 'g', 'a','c','e','f','x','y','i','j']
    const objsFiltered = filterPropertiesN(props, objs)
   expect(objsFiltered).toEqual(objs)
})



