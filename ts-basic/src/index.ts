console.log("typscript yeah");

let myName: string;
let myAge: number;
myAge = 32;

// TYPE: BOOLEAN
let myBoolean: boolean = true;
myBoolean = false;

if (!myBoolean) {
  console.log(`myBoolean is ${myBoolean}`);
}

// TYPE: ANY
let myAny: any = myBoolean;
myAny = myBoolean;
myAny = "May";
myName = myAny;
console.log(`myName is type ${typeof myName}`); // string

// TYPE: UNKNOWN
let myUnknown: unknown;
myUnknown = myBoolean;
myUnknown = "Meowww";
// myName = myUnknown; myName is not assigned to string
// myName = myUnknown.toString(); notwork, unknown is type unknown

// TYPE: ARRAY
let classNames: string[] = ["Oia", "Tung tung sahur", "Weeewiwi"];
let nums: number[] = [1, 2, 4, 5];
// Tuple: mix of types --rare, use object
let myTuple: [string, number, boolean] = ["May", 12, true];
// myTuple.push("New item"); prevent accidentally add to array by using readonly
console.log(`Tuple: ${myTuple}`);
// Named Tuple
let namedTuple: [firstName: string, lastName: string, age: number] = [
  "May",
  "Keso",
  32,
];

console.log(typeof namedTuple[2]);
console.log(namedTuple[0]);

// Assign type to parameter and return = string
const sayName = (myName: string): string => {
  return `Hi! My name is ${myName}`;
};

console.log(sayName("Gurkan"));
// console.log(sayName(22)); num not allowed

const squareOfNumber = (num: number): void => { /* no return any meaningful value */
  num * num;
};
/* void is often used for:
Functions that update state
Event handlers (like onClick)
Functions with side effects (but no output) */
console.log(`Type of square is ${typeof squareOfNumber(2)}`);

let age: string | number = "12";

const calculationTenYears = (currentAge: string | number) => {
  if (typeof currentAge === "string") {
    return "That's not a number!";
  } else {
    return `Your age in ten years is ${currentAge + 10}`;
  }
};

console.log(calculationTenYears(3));

// Interface
interface Animal {
  name: string,
  type: string,
  lifespan?: number, /* lifespan can be missing when assigning */
  european: boolean,
}

let capybara: Animal = {
  name: "Capybara",
  type: "mammals",
  european: false,
};

interface Dog extends Animal {
  breed: string;
}

let chihuahua: Dog = {
  name: "Chihuahua",
  type: "mammals",
  european: false,
  breed: "Chihuahua",
};

// Type aliases
type jobTitle = string;
type accountType = "User" | "Admin";/* allow to be only these two values */


type Person = {
  firstName: string,
  lastName?: string,
  age: number,
  alive: boolean,
  position?: jobTitle,
};

let May: Person = {
  firstName: "May",
  lastName: "Oreo",
  age: 32,
  alive: true,
};

May.firstName = "Patrick"
console.log(May.firstName) /* Patrick */

type Parent = Person & {
  children: number,
  childrenNames: string[],
  pet?: Animal /* extends interface Animal */;
};

let Merlock: Parent = {
  firstName: "Merlock",
  age: 28,
  alive: true,
  children: 2,
  childrenNames: ["Druid", "Werewolf"],
  pet: {
    name: "Bubu",
    type: "cat",
    lifespan: 2,
    european: false,
  },
};

/* Generic Type */
let genericExample = <T>(data: T): T => {
  return data;
}

genericExample(<string>"Bangkok");
genericExample(<number>34);

/* Props */
/* export interface */
interface MyComponentProps {
  title: string,
  data: number
}

const MyComponent = ({ title, data }: MyComponentProps) => {
  /* argument */
};
