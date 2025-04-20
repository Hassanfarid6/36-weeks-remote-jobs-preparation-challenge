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

let re = todoList.add('Buy groceries').add('Read book').getAll(); 
console.log(todoList.getAll());                      
let res = todoList.get(0);                            
let ree = todoList.update(1, 'Finish book').getAll();
let rem = todoList.remove(0).getAll();
let clr = todoList.clear().getAll();

console.log(re); 
console.log(res);
console.log(ree);
console.log(rem);
console.log(clr);

module.exports = Todo;
