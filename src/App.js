import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/Home";
import Formulario from "./Pages/Formulario/Formulario";
import Login from "./Pages/Login/Login";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

      <Route path='/'element= { <Formulario/> } />
      <Route path='/home' element={ <Home /> } />
      <Route path='/Login' element={ <Login /> } />

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;