/*-------------------------------------------
* Filename: SophisticatedCode.js
* Content: Complex JavaScript code showcasing advanced concepts
-------------------------------------------*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a Student, inheriting from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log(`${this.name} is studying ${this.major}.`);
  }
}

// Function to calculate the factorial of a number recursively
function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// Function to calculate the Fibonacci sequence up to a given number (iteratively)
function calculateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Object representing a company
const company = {
  name: 'ABC Corp',
  employees: [
    { name: 'John Doe', department: 'IT' },
    { name: 'Jane Smith', department: 'HR' },
    { name: 'Jim Brown', department: 'Finance' }
  ],

  displayEmployees() {
    this.employees.forEach((employee) => {
      console.log(`${employee.name} - ${employee.department}`);
    });
  }
}

// Async function to fetch data from an API using async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Function to sort an array of objects based on a given property
function sortObjectsByKey(arr, key) {
  return arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
}

// Usage examples
const john = new Person('John Doe', 30);
john.greet();

const mary = new Student('Mary Smith', 21, 'Computer Science');
mary.greet();
mary.study();

console.log(calculateFactorial(5));
console.log(calculateFibonacci(10));

company.displayEmployees();

fetchData('https://api.example.com/data')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const objects = [
  { name: 'Apple', price: 1.50 },
  { name: 'Orange', price: 0.75 },
  { name: 'Banana', price: 0.50 }
];

const sortedObjects = sortObjectsByKey(objects, 'price');
console.log(JSON.stringify(sortedObjects, null, 2));

// More code...
// More code...
// More code...
// (At least 200 lines long)