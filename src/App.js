// components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';

// styles / css
import './App.css';

import Octocat from './assets/Octocat.png';
import ShowUserName from './Components/ShowUserName';
import { useState } from 'react';



function App() {
  const name = "Eduardo";
  const [userName] = useState("Maria");

  return (
    <div className="App">
      <h1>Avançando no React!</h1>
      {/* Imagem em asset 
      <div>
        <img src={Octocat} alt="gato" />
      </div>
      
      <ManageData/>
      <ListRender />
      <ConditionalRender/>
      */}
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
