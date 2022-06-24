import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([
    'React',
    'Javascript',
    'Node Js',
    'Gatsby',
    'Ruby on Rails',
  ]);
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
            key={index}
            class=""
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
}

export default App;
