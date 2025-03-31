import { Route, Routes } from 'react-router-dom'
import { Form } from './components/Form';
import { Card } from "./components/Card";
import './App.css'


function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="Form" element={<Form />} />
          <Route path="Card" element={<Card />} />
        </Routes>
      </div>
    </>
  );
}

export default App
