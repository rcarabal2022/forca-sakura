/*import "./App.css";
import Logo from './assets/img/LogoTarot.png';
import {Link} from 'react-router-dom';

function App() {

  fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/", 
    {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    }
)
.then((resp) => resp.json() )
.then((data) => console.log (data))
.catch(function(error) { console.log(error); });

  return (
    < >
      
       <Link to='/pagina2'>Ir a la seconda pagina</Link>
        <img  src={Logo}className="LogoTarot" alt="logoTarotSakura" />
        <h1> Selecciona 3 Cartas </h1>
        
    </>
  );
}

export default App;*/ 

import './App.css';
import Home from './Home';
// import {BrowserRouter as Router, Route, Switch } from 'react-dom'
  
function App() {
  return (
    <div className="App">
      <div className='flexbox-container'>
        {/* <Switch>
          <Route path="/"> */}
            <Home  />
          {/* </Route>
        </Switch> */}
      </div>
    </div>
  );
}

export default App;