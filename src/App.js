import './App.css'
import Footer from './footer';
import Header from './header';
import Aside from './aside';
import User from './user';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Footer />
      <User name="Alex" age={25}/>
      <User name="Filip" age={35}/>
      <User name="John" age={28}/>
       
     </div>
  );
}

export default App;

