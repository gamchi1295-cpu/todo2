
import { useState } from 'react';
import './App.css'
import TodoItem from './componet/TodoItem'

const mockdata = [
  {id : 0, content : "청소하기" },
  {id : 1, content : "세탁하기" },
  {id : 2, content : "공부하기" }
]




function App() {
  
  const parsedData = JSON.parse(localStorage.getItem("todos"))

  const [todos, setTodos] = useState(parsedData || []);
  const [content, setContent]=useState("");

  localStorage.setItem("todos" , JSON.stringify(todos));
  const onContent = (e) =>{
    setContent(e.target.value);
  }

  //추가버튼 클릭 시 실행 함수 만들기

  const onAdd = () => {
    if(content === ""){
      return;
    }
    setTodos((prevTodos)=>{return[...prevTodos,{id : Date.now() , content : content}]})
    setContent("");
  }

  //엔터키 눌리면 값 들어가기

  const onEnter = (e) =>{
    if(e.key === "Enter"){
      onAdd();
    }
  }

  //할일 리스트 삭제

  const onDelete = (targetId) =>{
    setTodos((prevTodos)=>{return prevTodos.filter((item)=>{
      return item.id !== targetId
    })});
  }

  return (
    <>
      <div id="wrap">
        <div className="inner">
          <h1>My Todo List</h1>

            

          <div className="add">
            <input onChange={onContent} onKeyDown={onEnter} value={content} type="text" placeholder='할 일을 입력하세요!'/>
            <button type="button" onClick={onAdd}>추가</button>
          </div>

          <div className="list">
            {todos.map(({id, content})=>{
              return <TodoItem id={id} content={content} onDelete={onDelete}></TodoItem>
              })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
