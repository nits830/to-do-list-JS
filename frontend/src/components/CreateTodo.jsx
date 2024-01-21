import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    return(
    <div>
        <input 
        onChange={e => setTitle(e.target.value)}
        style={{
            padding: 10,
            margin:10
        }}
        type="text" placeholder="title"></input><br/>

        <input
        onChange={e => setDescription(e.target.value)}
        style={{
            padding:10,
            margin:10
        }}
        type="text" placeholder="description"></input><br/>

        <button 
        onClick={()=> {
            fetch('http://localhost:3000/todos', 
            {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description:description,
                    completed: false
                }),
                headers:{
                    "Content-type": "application/json"
                }


            }).then(async (res)=>{
                const json = await res.json();
                alert('Todo added')

            })
        }}
        style={{
            padding:10,
            margin:10
        }}
        >Add a todo</button>
    </div>
    )
}