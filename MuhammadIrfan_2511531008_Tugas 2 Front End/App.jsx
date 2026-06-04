import { useState, useEffect } from "react";
import "./app.css";

const storage_key = "my-todos";
export default function app(){
  //state
  //state cek daftar to do list
  const [todos, setTodos] = useState(() => {
    const dataTersimpan = localStorage.getItem(storage_key);
    return dataTersimpan ? JSON.parse(dataTersimpan): [];
  })

  // state isi teks di kotak input
  const [input, setInput] =   useState("");

  //useEffect , perubahan to do list simpan di localstorage
  useEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(todos));
  },[todos]);

  function addTodo(){
    if(input.trim() == "") return;
    const todoBaru = {id : Date.now(), text : input, done : false};
    setTodos([todoBaru, ...todos]);
    setInput("")
  }

  function toggleTodo(id){
    setTodos(
      todos.map((todo) =>
        todo.id == id ? {...todo, done : !todo.done } : todo
      )
    )
  }
  
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  return (
    <div className="container">
      <h1>📝 Todo List</h1>
 
      {/* input */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Tulis tugas baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Tambah</button>
      </div>
 
      
      {todos.length === 0 && (
        <p className="empty-text">Belum ada tugas. Tambah sekarang!</p>
      )}
 
      
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.done ? "selesai" : ""}`}
        >
          {/* Checkbox untuk toggle selesai */}
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
 
          {/* Teks todo */}
          <span className={`todo-text ${todo.done ? "dicoret" : ""}`}>
            {todo.text}
          </span>
 
          {/* Tombol hapus */}
          <button
            className="tombol-hapus"
            onClick={() => deleteTodo(todo.id)}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}