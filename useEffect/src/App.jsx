
import Counter from './components/Counter';
import { useState, useEffect } from 'react';

function App() {


  const [isNumber, setNumber] = useState(true);

  return (
    <div className="App">

      {isNumber && <Counter />}

      <br />

      <button onClick={() => setNumber(!isNumber)} >Toggle Counter</button>
    </div>
  );
}

export default App;
