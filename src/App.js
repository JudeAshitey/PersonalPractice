
import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from './components/AuthPage';
import NewOrderPage from './components/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import NavBar from './components/NavBar';
// Add the following import
import { Routes, Route } from 'react-router-dom';

// const {user , setUser} = useState({});

function App(props) {


  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
    }  

export default App;
