import Singin from './component/singin';
import Home from './component/home'
import Protected from './component/protected'
import './App.css';
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Protected Comp={Home} />} />
        <Route path='/singin' element={<Singin />} />
      </Routes>
     
    </div>
  );
}

export default App;
