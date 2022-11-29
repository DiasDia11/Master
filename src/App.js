// components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import { useState } from 'react';
import CarDetails from './Components/CarDetails';
import Fragments from './Components/Fragments';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';

// styles / css
import './App.css';
import Octocat from './assets/Octocat.png';
import MyComponent from './ComponentsCSS/MyComponent';
import Title from './ComponentsCSS/Title';




function App() {
  {/* 
  const name = "Eduardo";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Camaro", color: "Vermelho", newCar: false, km: 391231},
    {id: 3, brand: "Amarok", color: "Azul", newCar: false, km: 1231}
  ];

  function ShowMessage(){
    console.log("Este é o componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  */}

  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <div className="App">
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* CSS global
      <h1>React com CSS</h1>
       */}
      {/* CSS de Componente 
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
      */}
      {/* Inline CSS 
      <p style={{
        color: "magenta", 
        padding: "25px", 
        borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      */}
      {/* Inline Style Dinâmico 
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        Css Dinâmico
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        Css Dinâmico
      </h2>
      <h2 style={
        name === "Matheus" 
        ? {color: "green", backgroundColor: "#000"}
        : null
      }
      >
        Teste nome
      </h2>
      */}
      {/* Classe Dinâmica 
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe Dinâmica
      </h2>
      */}
      {/* CSS Modules 
      <Title />
      */}























      {/* Imagem em asset 
      <div>
        <img src={Octocat} alt="gato" />
      </div>
      
      <ManageData/>
      <ListRender />
      <ConditionalRender/>
      */}
      {/* props 
      <ShowUserName name={userName} />
      */}
      {/* destructuring 
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
      */}
      {/* reaproveitamento 
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Reanult" km={4500} color="Cinza" newCar={false}/>
      */}
      {/* loop em array de objetos 
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      */}
      {/* fragment 
      <Fragments propFragment="teste"/>
      */}
      {/* children 
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>  
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      */}
      {/* executar função 
      <ExecuteFunction myFunction={ShowMessage} />
      */}
      {/* state lift */}
      {/* <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      */}
    </div>
  );
}

export default App;
