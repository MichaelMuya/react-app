# Portfolio Page

**Deployed website:** [https://michaelmuya.github.io/react-app/](https://michaelmuya.github.io/react-app/)

## 1) What is NPM (Node Package Manager)?

NPM is a tool in JavaScript that comes with Node.js, helping manage and share packages used in projects. Developers install, share, and manage libraries using npm for their JS projects.

## 2) What is SPA (Single Page Application)?

SPA is a web application where the server sends only a single HTML page (`index.html`) to the browser for the website to run fully. Updates are managed dynamically by JavaScript.

## 3) What is the event loop?

The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. When all statements from the call stack have been executed, the event loop pops the statements from the queue and pushes them to the call stack.

## 4) What is the difference between `export x` and `export default x`? How do you import them differently?

`export x` exports a variable or class with a specified name, while `export default x` exports a single "main" thing from a module. When importing, you can choose any name for it, but with `export x`, one must use the exact name and also use curly braces to enclose the name.

## 5) Why do you use `className` as a property in React and not `class`?

In React, using 'class' will cause a conflict because it's a reserved keyword in JavaScript, so `className` was created for this purpose.

## 6) Why should you not write the following? What will happen?

```javascript
<button onClick={setCounter(counter + 1)}> +1 </button>

In React, 'onClick' expects a function to be referred but here, the setCounter expression is invoked immediately. A fix would be to pass a function reference like:
<button onClick={() => setCounter(counter + 1)}> +1 </button>

##7) What is object deconstruction and how is it connected to React components (example)?
Object deconstruction in JavaScript allows you to extract values from the 'props' object and assign them to variables, making it easier to work with some properties. An example would be: 
#definition

const WithDestructuring = ({ user }) => {
  const { name, email } = user;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

**8) How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?**
Both can be used through JSX which is an extension that allows you to write html code within the JS functions.It is transformed under the hood during building that's why it is possible. Below is an example
const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a simple React component with JSX.</p>
    </div>
  );
};
export default MyComponent;
**9) What is async/await? Bring an example**
This syntax handles asynchronous operations in JS. "Async' declares the asynchronous function while 'await' waits for a promise to resolve but continues to execute. An example is shown below: 
const delayFunction = async () => {
  console.log('Start');

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('End after 2 seconds');
};

delayFunction();

**10) What is a Promise? Bring an example**
A promise is an object in JavaScript used for asynchronous operations.From the word itself, a promise is shown when the an asynchronous task is completed and it allows you to handle the result or when an error occurs. An example of a promise is: 
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Hello, this is your data!' };
      resolve(data); 
    }, 2000); 
  });
};

fetchData()
  .then(data => {
    console.log('Fetched data:', data.message);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
