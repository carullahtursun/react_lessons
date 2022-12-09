
import './App.css';

import User from './components/User'


const friends = [
  {
    id:1,
    name:'ahmet',
  },
  {
    id:2,
    name:'mehmet',
  },
  {
    id:3,
    name:'ayse',
  }
]
function App() {

  return (
    <div  >

      <User
        name="ahmet"
        surName="seven "
        isLoggedIn={true}
        age={29}
        friends={friends}
        adress={{
          title:'selcuklu Konya',
          zip:42000
        }}
      />

    </div>



  )
}
export default App;