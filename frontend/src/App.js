import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
