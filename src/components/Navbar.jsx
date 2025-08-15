import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import ThemeToggle from "../components/ThemeToggle";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dashboardDetailsRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logOut();
      closeMobileMenu();
      closeDashboardDetails();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const closeDashboardDetails = () => {
    if (dashboardDetailsRef.current) {
      dashboardDetailsRef.current.open = false;
    }
  };

  const handleToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
    closeDashboardDetails();
  };

  // New: Close dashboard <details> if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dashboardDetailsRef.current &&
        !dashboardDetailsRef.current.contains(event.target)
      ) {
        dashboardDetailsRef.current.open = false;
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  

  const guestLinks = (
    <>
      <li className="font-bold">
        <Link to="/"  onClick={handleLinkClick} >
          Home
        </Link>
      </li>
      <li>
        <Link to="/all-services" onClick={handleLinkClick}>
          Services
        </Link>
      </li>
       <li>
        <Link to="/blog" onClick={handleLinkClick}>
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/auth/login" onClick={handleLinkClick}>
          Login
        </Link>
      </li>
    </>
  );

const userLinks = (
  <>
    <li>
      <Link to="/" onClick={handleLinkClick}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/all-services" onClick={handleLinkClick}>
        Services
      </Link>
    </li>
    <li>
      <Link to="/blog" onClick={handleLinkClick}>
        Blogs
      </Link>
    </li>
    <li tabIndex={0}>
      <details ref={dashboardDetailsRef}>
        <summary className="cursor-pointer">Dashboard</summary>
        <ul className="p-2 bg-pink-100 dark:bg-pink-700 rounded-md shadow z-[100]">
          <li>
            <Link to="/addService" onClick={handleLinkClick}>
              Add Service
            </Link>
          </li>
          <li>
            <Link to="/manageServices" onClick={handleLinkClick}>
              Manage Service
            </Link>
          </li>
          <li>
            <Link to="/bookedServices" onClick={handleLinkClick}>
              Booked Services
            </Link>
          </li>
          <li>
            <Link to="/serviceToDo" onClick={handleLinkClick}>
              Service To Do
            </Link>
          </li>
        </ul>
      </details>
    </li>
  </>
);

   
  return (
    <div className="font-roboto fixed top-0 z-50 navbar bg-pink-200 dark:bg-pink-900 font-bold text-md text-black dark:text-white shadow-sm px-4">
      <div className="navbar-start">
        <div className={`dropdown ${mobileMenuOpen ? "dropdown-open" : ""}`} ref={dropdownRef}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={handleToggle}>
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow rounded-box dark:bg-pink-50 bg-pink-900 z-[100]">
            {user ? userLinks : guestLinks}
            {user && (
              <li className="mt-2">
                <button onClick={handleLogout} className="btn btn-error btn-sm w-full text-white">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="text-5xl font-bold  text-pink-900 dark:text-pink-200 font-kapakana"
          onClick={handleLinkClick}
        >
          Festivya
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{user ? userLinks : guestLinks}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user && (
          <>
            <div className="flex items-center gap-2 mr-4">
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium hidden md:block">{user.displayName}</span>
            </div>
            <button onClick={handleLogout} className="btn btn-error btn-sm text-white whitespace-nowrap">
              Logout
            </button>
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
