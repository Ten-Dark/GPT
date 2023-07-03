import { useEffect } from 'react';
import './App.css';
import { Main } from './components/Main';
import WebFont from 'webfontloader';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Days One', 'Montserrat']
      }
    })
  }, [])
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
