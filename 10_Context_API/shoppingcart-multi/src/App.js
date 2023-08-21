import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './itemContext';
import { totalContext } from './totalContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
        <div className='App'>
          <h2>Shopping Cart</h2>
          <itemContext.Provider value={{item, setItem}}>
            <totalContext.Provider value={{total, setTotal}}>
              <Navbar />
              <Items />
            </totalContext.Provider>
          </itemContext.Provider>  
        </div>
  );
}
export default App;
