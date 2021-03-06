import { Link } from "react-router-dom";

function BlogHeader(props) {
  const { user } = props;

  return <header>
    <Link to="/"><p>Box Beats</p></Link>
    {user ?  <Link to="/sign-out" ><p>Sign Out</p></Link> : <><Link to="/sign-in" ><p>Sign in</p></Link>
      <Link to="/sign-up" ><p>Sign up</p></Link>
    </>}
  </header>
}
export default BlogHeader;