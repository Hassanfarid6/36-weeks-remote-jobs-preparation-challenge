/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todos = []
  }

  add(todo){
    this.todos.push(todo)
    return this
  }

  remove(index){
       if(index >= 0 && index < this.todos.length){
        this.todos.splice(index, 1)
      }
      return this
      }
  update(index, updatedTodo){
    if (index >= 0 && index < this.todos.length){
      this.todos[index] = updatedTodo
    }
    return this
  }

  getAll(){
    return this.todos
  }
  
  get(index){
    if(index >= 0 && index < this.todos.length){
      this.todos[index]
      return this
      }
    return null
  }
  clear(){
    this.todos = []
    return this 
  }

}

const myTodos = new Todo();
myTodos.add("Buy milk").add("Walk dog");

console.log(myTodos.getAll()); // Should print: ["Buy milk", "Walk dog"]

let re = myTodos.add('Buy groceries').add('Read book').getAll(); // ['Buy groceries', 'Read book']
let res = myTodos.get(0); // 'Buy groceries'
let ree = myTodos.update(1, 'Finish book').getAll(); // ['Buy groceries', 'Finish book']
let rem = myTodos.remove(0).getAll(); // ['Finish book']
let clr = myTodos.clear().getAll(); // []
let err;
try {
  myTodos.get(0); // Throws: Error: Invalid index
} catch (e) {
  err = e.message;
}

console.log(re); // ['Buy groceries', 'Read book']
console.log(res); // 'Buy groceries'
console.log(ree); // ['Buy groceries', 'Finish book']
console.log(rem); // ['Finish book']
console.log(clr); // []
console.log(err); //

module.exports = Todo;
