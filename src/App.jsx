import './App.css'
import Counter from './Count'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
 function handleClick(){
  alert("Button Clicked")
 }
 function handleClick2(){
  alert("Button2 Clicked")
 }

 const addToFive = (num)=>{
  alert(num+5)
 }


  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => {alert('Third Clicked')}}>Third</button>
      {/* vajilla */}
      <button onClick={()=> addToFive(3)}>Fourth</button>
      
    </>
  )
}

export default App
