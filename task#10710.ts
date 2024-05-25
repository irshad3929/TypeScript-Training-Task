export {};
// Challenge-1 Signle level object type

type DefineProperties<T> = {
  [K in keyof T]-?: Exclude<T[K], null | undefined>;
};

interface User {
  age?: number | undefined;
  name: string | null;
}

type definedUser = DefineProperties<User>;

//console.log(JSON.stringify({ age: 30, name: 'Tony' } as definedUser));

/**
 * this definedUser infer
 * 
 * type definedUser = {
    age: number;
    name: string;
}
 */

// Challenge-2 Nested object type

type DefineProperties1<T> = {
  [K in keyof T]-?: T[K] extends number | string | null | undefined
    ? Exclude<T[K], null | undefined>
    : Exclude<T[K], null | undefined>; // -? remove optionally
};

//case
type User1 = {
  age1: number | undefined;
  name1: string | null;
  address?: {
    city: string | null;
    zipCode?: number | null;
  };
};

type definedUser1 = DefineProperties1<User1>;

//console.log(JSON.stringify({ age1: 30, name1: 'Tony', address: { city: 'DELHI', zipCode: 10001 } } as definedUser1));

/**
 * There is little mistake not removd from nested obj
 * 
 * type definedUser1 = {
    age1: number;
    name1: string;
    address: {
        city: string | null;
        zipCode?: number | null;
    };
}
 */
