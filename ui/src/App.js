import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>HomePage</h1>} />
          <Route path='/page1' element={<h1>Page 1</h1>} />
          <Route path='/page2' element={<h1>Page 2</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
