import './App.css';
// import Footer from './footer';
// import Header from './header';]
// import Aside from './aside';
// import User from './user';
// import Counter from './counter';
import Product from './homework-8/Product';
// import changes from './homework-8/Product';
import Input from './homework-8/Input';
import ToDo from './Component/ToDo/ToDo';
// import ToDo from './Component/ToDo';

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
    <div className="App">
    <Input />  
      {/* <Aside />
      <Footer /> 
      // <User name="Alex" age={25}/>
      // <User name="Filip" age={35}/>
      // <User name="John" age={28}/>
      // <User surname="Jangchyan"/>
      <Counter  defaultValue = {26}/>  
       <Product name="Name: Banan" price="570AMD" description="Made in China" />*/}
      <ol>{list}</ol>
       <ToDo />
    </div>
  );
}

export default App;

