import { BrowserRouter, Route, Routes } from 'react-router';
import { ElectronicsList } from './routes/ElectronicsList';
import { Login } from './routes/Login';
import { Register } from './routes/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="list" element={<ElectronicsList />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
