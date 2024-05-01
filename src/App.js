
import PrivateRoutes from './utiils/PrivateRoutes';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allusers" element={<AllUsers />} />
      </Route>
      <Route path="/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
