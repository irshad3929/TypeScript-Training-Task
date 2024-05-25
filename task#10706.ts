export {}


type Func = (...args: any[]) => any;

//Logger function

const loggerWrapper = (func: Func) => {
  return (...args: any[]) => {
    console.log(
      `Calling function add with arguments : ${args.join(", ")}`
    );
    return func(...args);
  };
};

//case
const add = (a:number,b:number):number => a+b;   //sum of a and b

const loggedAdd = loggerWrapper(add);

const value = loggedAdd(3,5); 

console.log(value);  // Calling function add with arguments: 3, 5 , output : 8