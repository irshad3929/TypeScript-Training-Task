
export{}

//case - Function that takes object as first parameter and second parameter of take only keys of the object 

function updateObject<T extends object, K extends keyof T>(obj: T, key: K, value: T[K] ) : T {
    return {
        ...obj, 
        [key]:value,
        
    };
    
}

//test case 
const obj = { a: 1, b: 'hello', c: true };
const updated = updateObject(obj, 'b', 'world');

console.log(updated);   //  { a: 1, b: 'world', c: true }


// another test case
const mixedObj = { a: 42, b: 'string', c: true, d: [1, 2, 3] };
const updatedNumber = updateObject(mixedObj, 'a', 100);

console.log(updatedNumber);   // { a: 100, b: 'string', c: true, d: [ 1, 2, 3 ] }