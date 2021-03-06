
import './App.css';
import { useState, useEffect } from "react";
import { verifyUser } from './services/users'
import { Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import MobileWarning from './components/MobileWarning/MobileWarning';
import SignUp from "./screens/SignUp/SignUp";
import SignOut from './components/SignOut/SignOut';
import SignIn from './screens/SignIn/SignIn';
import Footer from './components/Footer/Footer';


function App() {
  const [user, setUser] = useState(false);
  const clearUser = () => setUser(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  return (
    <div className="app">
       <MobileWarning/>
      <Route exact path="/blog"><Blog user={user}/></Route>
      <Route exact path="/"><Home user={user}/></Route>
      <Route exact path="/sign-up"><SignUp siteUser={user} setUser={setUser}/></Route>
      <Route exact path="/sign-in"> <SignIn siteUser={user} setUser={setUser} /></Route>
      <Route exact path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser}/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
