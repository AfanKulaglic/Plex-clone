import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { HomePage } from './Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <HomePage/> } ></Route>  
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
