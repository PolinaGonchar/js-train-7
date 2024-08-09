// Task 1: Function to create a symbol
function createSymbol() {
  return Symbol();
}

console.log("Task 1 ====================================");
console.log(createSymbol()); // Outputs Symbol()

// Task 2: Function to create a symbol with a description and return the description
function createSymbolWithDescription(property) {
  let newSmb = Symbol(property);
  return newSmb.description;
}

console.log("Task 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Outputs My symbol

// Task 3: Creating object properties using Symbol
// In this task, we will create an object property where the key is a symbol.

// Create a function that creates an object with a property where the key is a symbol
function createSymbolProperty(property) {
  let sym = Symbol();
  let obj = {};
  obj[sym] = property;
  return obj;
}

console.log("Task 3 ====================================");
console.log(
  createSymbolProperty("This is an object property using a symbol")
); // Outputs { [Symbol()]: "This is an object property using a symbol" }

// Task 4. Check if symbols are unique
// Function to create two symbols with the same description and compare them
function createAndCompareTwoSymbols(value) {
  let newSmb1 = Symbol(value);
  let newSmb2 = Symbol(value);
  return newSmb1 === newSmb2;
}

console.log("Task 4 ====================================");
console.log(createAndCompareTwoSymbols("My Symbol")); // Outputs false

// Task 5: Creating a symbol using Symbol.for()

// The createSymbolForKey function creates a new symbol using Symbol.for() and returns it
function createSymbolForKey(key) {
  let newSymbol = Symbol.for(key);
  return newSymbol;
}

// The compareSymbolsForKey function compares two symbols using the '===' operator
function compareSymbolsForKey(symbol1, symbol2) {
  return symbol1 === symbol2;
}

console.log("Task 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Create a new symbol
let symbol6 = createSymbolForKey("myKey"); // Create a new symbol
console.log(compareSymbolsForKey(symbol5, symbol6)); // Outputs: true

// Task 6: Using Symbol.keyFor(sym)

// The getSymbolKey function takes a symbol as an argument and returns the key that was used to create it
function getSymbolKey(symbol) {
  return Symbol.keyFor(symbol);
}

console.log("Task 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Create a new symbol or get an existing one from the global symbol registry
console.log(getSymbolKey(symbolForKey)); // Outputs the symbol's key. Outputs: myKey

// Task 7: Using Symbol.toString

function useSymbolToString() {
  let myObject = {};
  return myObject[Symbol.toString] = 'CustomObject';
}

console.log("Task 7 ====================================");
console.log(useSymbolToString()); // Outputs CustomObject

// Task 8: Using Symbol.description

// The useSymbolDescription function uses the Symbol.description property to get the symbol's description.

function useSymbolDescription() {
  const mySymbol = Symbol("mySymbol");
  const symbolDescription = mySymbol.description;
  return symbolDescription;
}

console.log("Task 8 ====================================");
console.log(useSymbolDescription()); // Outputs mySymbol

// Task 9: Using Symbol.iterator

let rangeObject = {
  from: 1,
  to: 7,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current < this.to) {
      return { value: this.current++, done: false };
    } else {
      return { done: true };
    }
  },
};

function useSymbolIterator(obj) {
  let result = [];
  for (let value of obj) {
    result = [...result, value];
  }
  return result;
}

console.log("Task 9 ====================================");
console.log(useSymbolIterator(rangeObject)); // Outputs [ 1, 2, 3, 4, 5, 6 ]

// Task 10: Using Symbol.iterator

let myObject = {
  category: [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" }, 
    { id: 3, name: "orange" },
    { id: 4, name: "grape" },
    { id: 5, name: "mango" },
  ],
  currentIndex: 0,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.currentIndex < this.category.length) {
      const value = this.category[this.currentIndex].name;
      this.currentIndex++;
      return { value, done: false };
    } else {
      return { done: true };
    }
  },
};

console.log("Task 10 ====================================");
console.log(useSymbolIterator(myObject)); // Outputs [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
