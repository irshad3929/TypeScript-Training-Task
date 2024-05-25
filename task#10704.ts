//task no 10704
export{} // to avoid potential conflict , treated as module

function reverseTuple<T,U,V>(tuple: readonly [T,U,V]) : [V,U,T]{
    return [tuple[2],tuple[1],tuple[0]];
}

//case 1- Define the const arr using the type
const arr : [number,string,boolean] = [42,"hello",true];

const reversedTuple = reverseTuple(arr);

console.log(reversedTuple);

// case 2- Define the const arr using without type
const arr2 = [42,"hello",true] as const; // to make a constant tuple

const reversedTuple2 = reverseTuple(arr2);

console.log(reversedTuple2);





