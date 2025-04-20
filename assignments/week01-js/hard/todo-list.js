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
      return this.todos[index]
      }
    return null
  }
  clear(){
    this.todos = []
    return this 
  }

}

let todoList = new Todo()
todoList.add("Buy milk").add("Walk dog");

let re = todoList.add('Buy groceries').add('Read book').getAll(); // ['Buy groceries', 'Read book']
console.log(todoList.getAll()); // Should print: ["Buy milk", "Walk dog"]
let res = todoList.get(0); // 'Buy groceries'
let ree = todoList.update(1, 'Finish book').getAll(); // ['Buy groceries', 'Finish book']
let rem = todoList.remove(0).getAll(); // ['Finish book']
let clr = todoList.clear().getAll(); // []
let err;
try {
  todoList.get(0); // Throws: Error: Invalid index
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
