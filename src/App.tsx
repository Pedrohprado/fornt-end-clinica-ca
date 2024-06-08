import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={'pedro'} age={31} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
