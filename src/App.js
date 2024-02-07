
import './style.scss'
import { createElement, Fragment } from 'react';

function App() {
  const name ='Meryem'
  
  const todos = ['todo1', 'todo2', 'todo3'];

  /*const todoElements = todos.map(todo => {
    return createElement('li', { key: todo }, todo);
  });

  return createElement('main', {
    className: 'test',
    id: 'main'
  },
    createElement('h1', null, 'meryemcifci.com'),
    createElement('ul', null, todoElements)
  );*/

  return (
    <Fragment id='main' className='test'> {/* Bu etiketin promplarıdır. */}
      <h1 tabIndex="3" style={{color:'red', backgroundColor:'yellow'}}>meryemcifci.com</h1> 
      <label htmlFor='search' tabIndex="2" onClick={()=>alert('merhabaa!!')}>Arama</label>
      <input type='text' id='search'  tabIndex="1"/>
      <ul>
        {name} ÇİFCİ
        
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;


