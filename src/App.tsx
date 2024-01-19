import React, { useEffect, useRef, useState } from 'react';

import './App.css';

interface Items{
  _id: number,
  item: string,
  completed: boolean
}

const App:React.FC = ()=> {

  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<Items[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setList([...list, {_id:list.length, item:input, completed: false}])
    setInput('');
  }

  const handleDone = (itemId: number) => {
    setList((prevList) => 
    (prevList.map((item) => item._id === itemId ? {...item, completed: !item.completed}:item)))
  }
  

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  })

  return (
    <>
    <h1>To Do List</h1>
    <div>
    <input ref={inputRef} type='text' value = {input} onChange={(e)=> setInput(e.target.value)}/>
    <button onClick={handleClick}>+</button>
    </div>
    <div>
      {list.map((todo)=>(
        <li key ={todo._id} 
        onClick={() =>handleDone(todo._id)} 
        style={{textDecoration: todo.completed ? 'line-through':''}}
        >
          {todo.item}</li>
      ))}
    </div>
    </>
  );
}

export default App;
