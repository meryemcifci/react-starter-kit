
import { createElement } from 'react'
import './Tailwind.css'
import Button from  './Components/Button'



function App() {

  const name ='Meryem' 
  const todos = ['todo1', 'todo2', 'todo3']
/*
  const h1=createElement('h1', null,'prototurk.com')
  const ul=createElement('ul',null,todos.map(todo=> createElement('li',null,todo)))
  const button=createElement(Button,{
    text: "Buton Texti"
  },null)

  return  createElement('main',{
    className:'test',
    id:'main'
  },h1,ul,button)
*/
  const searchFunction=()=>{
    alert('hello')
  }

  return (
    <> {/* Bu etiketin promplarıdır. */}
      <div style={{padding:20}}>
        <Button text="Buton Örneği " variant="success"/>
        <Button text="Buton Örneği " variant="danger"/>
        <Button text="Buton Örneği " variant="warning"/>
        <Button text="Buton Örneği "/>
      </div>
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
    </>
  );
}

export default App;


