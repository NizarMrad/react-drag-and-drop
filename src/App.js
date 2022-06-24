import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState([
    'React',
    'Javascript',
    'Node Js',
    'Gatsby',
    'Ruby on Rails',
  ]);
  const dragStart=(e,position)=>{
    dragItem.current=position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position)=> {
    dragOverItem.current=position
    console.log(e.target.innerHTML)

  }
  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'darkblue',
              margin: '15px 25%',
              textAlign: 'center',
              fontSize: '30px',
              borderRadius: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
            onDragStart={(e)=>dragStart(e,index)}
            onDragEnter={(e)=>dragEnter(e,index)}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
}

export default App;
