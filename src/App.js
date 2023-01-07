import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/LandingPage.css';
import IntroApp from './Components/Intro';
import NavigationBar from './Components/Navigation';
import CurrentNews from './Components/latest';
import OldNews from './Components/old';


function App() {
  return (
      <div className='MyBg'>
        <NavigationBar />
        <IntroApp />      
      <div className='newslatest'>
        <CurrentNews />
      </div>
      <div className='newsold'>
        <OldNews />
      </div>
      <div className='create'>
        
      </div>
    </div>
  );
}

export default App;
