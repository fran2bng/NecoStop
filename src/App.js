import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/Home";
import Form from "./Pages/form/form";
import Login from "./Pages/characters/Characters";
import Characters from "./Pages/characters/Characters";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

      <Route path='/'element= { <Form/> } />
      <Route path='/home' element={ <Home /> } />
      <Route path='/Characters' element={ <Characters /> } />

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;