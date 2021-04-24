import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthContextProvider from './components/AuthContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Route path="/src/components/SignUp.js" component={SignUp} />
          <Route path="/src/components/Login.js" component={Login} />
        </AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/Products" component={Products} />
        
      </BrowserRouter>
    </>
  );
}

export default App;
