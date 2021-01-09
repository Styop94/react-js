import './App.css';
import Footer from './footer';
// import Header from './header';]
import Aside from './aside';
import User from './user';
import Counter from './counter';
import Product from './homework-6/Product';


function App() {
  return (
    <div className="App">
      {/* <Aside />
     <Footer /> */ }
      <User name="Alex" age={25}/>
      <User name="Filip" age={35}/>
      <User name="John" age={28}/>
      <User surname="Jangchyan"/>
      <Counter  defaultValue = {26}/>
      <Product name={"MB "} price={"190K"} description={" S"} />
      <Product name={"Volvo "} price={"160K"} description={" safe"} />


    </div>
  );
}

export default App;

