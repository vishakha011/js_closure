## Hoisting Exercises

# If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.
1.
```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
```
No error.

Output: undefined


2. 
```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
```
Error: Reference Error: 'animal' is not initialized.
console.log cannot log any value because the variable animal is empty. let is not initialized when hoisted

3. 
```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
```
Error: Reference Error: 'animal' is not initialized.
console.log cannot log any value because the variable animal is empty. coonst is not initialized when hoisted

4. 
```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
```
Output: alert with the msessage "Hey Everyone" 

5. 
```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
```
Output: alert with the msessage "Hey Everyone" 

function declaration gets hoisted

6. 
```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
```
var initializes sayhello with undefined. 
When called, it does not whether it is a function or not.
Output: sayHello is not a function

7. 
```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
```
let does not initialize sayHello.
Output: Error: Reference Error: cannot access 'sayHello' before initialization