import React,{useContext,useState} from "react";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from'./pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { productInputs, userInputs } from "./formsource";
import './style/darkModeStyle.css';
import { DarkModeContext } from "./contexts/darkModeContexts";





function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [users, setUsers] = useState([]);  
  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  
  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" addUser={addUser}/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
