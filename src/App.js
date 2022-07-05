import './App.css';
import GamePage from './pages/GamePage';
import GameContext from './shared/GameContext';

function App() {
  return (
    <div className="App">
      <GameContext.Provider value='flarp'>
        <GamePage/>
      </GameContext.Provider>
    </div>
  );
}

export default App;
