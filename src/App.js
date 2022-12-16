import "./App.css";
import Logo from './assets/LogoTarot.png';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
      <header>
       <Link to='/pagina2'>Ir a la seconda pagina</Link>
        <img  src={Logo}className="LogoTarot" alt="logoTarotSakura" />
      </header>
    </>
  );
}

export default App; 
