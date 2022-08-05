import './App.css';
import Background from './assets/img/Background.jpg'
import GamePage from './pages/GamePage';
import SplashPage from './pages/SplashPage';
import { Container } from 'reactstrap';
import { selectPage } from './shared/activitySlice';
import { useSelector } from 'react-redux';


function App() {
  const page = useSelector(selectPage);

  return (
    <div className="App">
      <Container fluid className='m-0 p-0 game-layout'
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {page === 0 && <SplashPage/>}
        {page === 1 && <GamePage/>}
      </Container>
    </div>
  );
}

export default App;
