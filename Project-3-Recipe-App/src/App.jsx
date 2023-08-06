import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import userService from "./utils/userService";

//any component rendered by a route goes in the pages folder
//has client side routing is just for showing or hiding components based on the address
function App() {
  //this will get token from local storage and decode when the page loads
  //the token will be set to initial state
  //if there is a token, user will be user object (FROM WHERE), if there is no token, user will be null
  const [user, setUser] = useState(userService.getUser())

  //updates our state each time someone signs up or logs in
  //this makes sure we get the most recent token being made
  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null)
  }

  if(!user){
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleSignUpOrLogIn={handleSignUpOrLogin}/>} />
        <Route path="/signup" element={<SignUpPage handleSignUpOrLogIn={handleSignUpOrLogin}/>} />
        <Route path="/*" element={<Navigate to='/login' />} />
      </Routes>
    );
  }


  return (
    <Routes>
      <Route path="/" element={<FeedPage user={user} handleLogout={handleLogout}/>} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogIn={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogIn={handleSignUpOrLogin}/>} />
      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
