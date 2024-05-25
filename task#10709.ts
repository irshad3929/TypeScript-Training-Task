export {};
//Challenege-1 single level object type

type NullableProperties<T> = {
  [K in keyof T]: T[K] | null;
};

// case
interface User {
  age: number;
  name: string;
}

type NullableUser = NullableProperties<User>;

/* NullableUser infer the type NullableUser = {
    age: number | null;
    name: string | null;
}
*/

// Challenge-2 Nested Object type

type NullableProperties1<T> = {
  [K in keyof T]: T[K] extends object
    ? NullableProperties1<T[K]> | null
    : T[K] | null;
};

//example
interface User1 {
  age1: number;
  name1: string;
  address: {
    city: string;
    zipCode: number;
  };
}

type NullableUser1 = NullableProperties1<User1>;

/*
NullableUser1 is infer 

type NullableUser1 = {
    age1: number | null;
    name1: string | null;
    address: NullableProperties1<{
        city: string;
        zipCode: number;
    }> | null;
}

*/
