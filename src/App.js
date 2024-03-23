import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from "./formsource";
import './style/darkModeStyle.css';
import { DarkModeContext } from "./contexts/darkModeContexts";
import Profile from './pages/profile/Profile';
import { updateUserRows } from "./datatablesource"; 
import { v4 as uuidv4 } from 'uuid'; 
import Piechart from "./components/piechart/Piechart";
import './style/main.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ({ username, password }) => {
    const newUserName = "admin";
    const newPassword = "Admin@830156";

    if (username === newUserName && password === newPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addUser = (userData) => {
    const newUser = { ...userData, id: uuidv4() }; 
    updateUserRows(newUser); 
    console.log("Adding user:", newUser);
  };

  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home handleLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
          <Route path="profile" element={<Profile />}  />
          <Route path='stats' element={<Piechart/>}/>
          <Route path="users" element={<List />} />
          <Route path="users/:userId" element={<Single />} />
          <Route path="users/new" element={<New inputs={userInputs} title="Add New User" addUser={addUser} />} />
          <Route path="products" element={<List />} />
          <Route path="products/:productId" element={<Single />} />
          <Route path="products/new" element={<New inputs={productInputs} title="Add New Product" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
