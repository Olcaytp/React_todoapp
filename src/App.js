
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/index'
import React, { useState } from 'react';
import TodoList from './components/Todo/Todolist'
import Footer from './components/Footer';
function App() {
  // !! Header klasörünün içindeki input değerini almak için state oluşturuyoruz;
  const [inputText, setinputText] = useState("")
  

  const initialTodoValues = [
    {
    completed: false,
    text: "Learn JavaScript",
    id: 1
  },
  {
    completed: false,
    text: "Learn React",
    id: 2
  },
  {
    completed: false,
    text: "Have better life!",
    id: 3
  },
  {
    completed: false,
    text: "Live Happily!",
    id: 4
  }
]
  const [todos, setTodos] = useState(initialTodoValues);

useEffect(() => {
	 	console.log(todos);
	 }, [todos]);
  
  const [status, setStatus] = useState("");
  
  return (
    <div className="App">
    <section className="todoapp">

      {/* Yukarıdaki değerleri header klasörüne gönderdik. */}
      <Header
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        
      />
      
    
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
       
      />

     <Footer
     todos={todos}
     status={status}
     setStatus={setStatus}
     setTodos={setTodos}/>
    </section>
    
    <footer className="info">
    <p>Click to edit a todo</p>
    <p>Created by <a href="https://d12n.me/">Ece Beyza Nur Özen</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  </div>

  );
}

export default App;
