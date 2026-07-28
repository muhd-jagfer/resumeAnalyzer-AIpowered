import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-4 left-1/2 z-20 w-[min(92vw,1200px)] -translate-x-1/2 border border-gray-200/80 bg-white/90 backdrop-blur">
      <Link to="/" className="text-2xl font-semibold tracking-tight text-gradient">
        Resumyzer
      </Link>
      <Link to="/upload" className="primary-button w-fit px-6 py-3 text-sm font-medium shadow-sm">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;