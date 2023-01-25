import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("")
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)
  return (
    <div className="App">
      <div className='Head'>
        <h1>Pizza Order</h1>
      </div>
      <div className="split left">
        <div className='centered'>
          <input
            type = "text"
            label = "Name"
            placeholder='Name'
            onChange={e => setName(e.target.value)}
          />
          <label>
            <input 
              type="checkbox"
              id="peperoni"
              
              checked={peperoni}
              onChange={() => setPeperoni(!peperoni)}
            />
            Peperoni
            <input 
              type="checkbox"
              id="sausage"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
            <input 
              type="checkbox"
              id="peppers"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
            <input 
              type="checkbox"
              id="onions"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            Onions
          </label>
          <button>Submit</button>
        </div>
      </div>
      <div className='split right'>
        <div className='centered'>
          <h1>Your order</h1>
          {name && <div>{name}</div>}
          {peperoni && <div>Pepperoni</div>}
          {sausage && <div>Sausage</div>}
          {peppers && <div>Peppers</div>}
          {onions && <div>Onions</div>}
        </div>
      </div>
    </div>

  );
}

export default App;
