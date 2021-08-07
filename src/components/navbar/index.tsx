import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/trending" style={{ marginLeft: "1em" }}>
        Trending
      </Link>
    </div>
  );
};

export default Navbar;
