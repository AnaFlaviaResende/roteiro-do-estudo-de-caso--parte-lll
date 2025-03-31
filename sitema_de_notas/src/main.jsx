import { createRoot } from 'react-dom/client';/*Tentei usar o dom nessa atividade, mas não fui capaz...*/
import { BrowserRouter } from 'react-router-dom'; /*Tentei usar o dom nessa atividade, mas não fui capaz...*/
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
