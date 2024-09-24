
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Shivamogga Car Shop</h1>
       <p>Your prefferd Shop</p>
       <Profile/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
