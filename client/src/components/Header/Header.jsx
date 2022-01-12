import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
  const { user } = props;

  return <header>
    <Link to="/"><p>David Verghese's Online Daw</p></Link>
    {user ?  <Link to="/sign-out" ><p>Sign Out</p></Link> : <><Link to="/sign-in" ><p>Sign in</p></Link>
      <Link to="/sign-up" ><p>Sign up</p></Link>
    </>}
    <Link to="/blog" >Blog</Link>
  </header>
}
export default Header;