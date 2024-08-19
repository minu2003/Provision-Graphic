import ChooseUs from './ChooseUs';
import Home from './Home';
import Socialmedia from './Socialmedia';

function App() {
/*  const theme = createTheme({
    typography: {
      fontFamily: 
        [
          'Roboto',
          'sans-serif'
        ]
    }
  })*/
  return (
    <div>
      <Home/>
      <Socialmedia/>
      <ChooseUs/>
    </div>
  );
}

export default App;
