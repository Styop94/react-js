// import { Button } from 'bootstrap';
import ToDo from './Component/ToDo/ToDo';
import Conditional from './Conditional';
import Product from './homework-7-8/Product/Product';


const fruits = [
  {
    icon: '🍏',
    name: "Apple ",
    price: "1.5$ ",
    description: "1KG"
  },
  {
    icon: '🍌',
    name: "Banana ",
    price: "1.8$ ",
    description: "1.5KG"
  },

  {
    icon: '🍊',
    name: "Orange ",
    price: "2$ ",
    description: "1.2KG"
  },

  {
    icon: '🍐',
    name: "Pear ",
    price: "3$ ",
    description: "2.5KG"
  },
]

function App() {
  const list = fruits.map((fruits, index) => {
    return <li key = {index}> 
      <Product icon={fruits.icon} name={fruits.name} price={fruits.price} desc={fruits.desc} />
    </li> 
  })

  return (
    <div>
    <ToDo/>
    <Conditional />
      <ol>{list}</ol>
    </div>
  )
}

export default App;

