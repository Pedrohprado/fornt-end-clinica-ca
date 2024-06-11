import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Clients from './pages/clients';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes' element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
