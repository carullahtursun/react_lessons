import { useState } from 'react'
import Counter from './components/Counter';
import InputExample from './components/InputExample';

function App() {
  const [name, setName] = useState('ahmet');
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['ahmet', 'mehmet'])
  const [adress, setAdress] = useState({ title: 'ankara', zip: 44000 })
  return (
    <div >
      <h1>
        hallo {name} {age}
      </h1>
      <button onClick={() => setName("mehmet")} > change name</button>
      <button onClick={() => setAge(23)}>change age</button>,
      <br />
      <br />
      <hr />
      <h2>Friends</h2>
      {
        friends.map((friend, key) => (
          <div key={key}> {key}-{friend}</div>
        ))
      }
      <br />
      <button onClick={() => setFriends([...friends, 'ayse'])}> Add Frieends</button>

      <br />
      <br />
      <hr />

      <div>
        <h2>Adress</h2>
        {adress.title} {adress.zip}
      </div>
      <br />

      <button onClick={() => setAdress({ ...adress, title: 'isanbul', zip: 34000 })}> change the adress </button>




      <br />
      <br />
      <hr />

      <Counter />
      <br />
      <br />
      <hr />
      <InputExample/>
    </div>



  );
}

export default App;
