import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//views auth imports
import Login from './view/auth/login';
import Register from './view/auth/register';
//views home imports
import Index from './view/home';
import Staff from './view/home/pages/staff';
import Today from './view/home/pages/today';
import Work from './view/home/pages/work';
import Shopping from './view/home/pages/shopping';
import Planed from './view/home/pages/planed';
import Home from './view/home/pages/home';
//context imports
import { useAuth } from './context/authContext';
import { UserProvider } from './context/userContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/index" element={isAuthenticated ? <Index /> : <Login />} />
          <Route path="/staff" element={isAuthenticated ? <Staff /> : <Login />} />
          <Route path="/today" element={isAuthenticated ? <Today /> : <Login />} />
          <Route path="/work" element={isAuthenticated ? <Work /> : <Login />} />
          <Route path="/Shopping" element={isAuthenticated ? <Shopping /> : <Login />} />
          <Route path="/Planed" element={isAuthenticated ? <Planed /> :<Login />} />
          <Route path="/Home" element={isAuthenticated ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;