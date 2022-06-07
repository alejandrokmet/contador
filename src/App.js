import logo from './images/logo_header.png';
import './App.css';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        <Contador/>

        </p>

      </header>
    </div>
  );
}

export default App;
