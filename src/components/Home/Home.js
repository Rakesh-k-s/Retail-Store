import React ,{userState} from 'react'
import './Home.css'
function Home() {
    const[count, setCount]=userState(0);


  return (
    <div><div>Home</div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
        Increase counter
    </button>



    </div>

  )
}

export default Home