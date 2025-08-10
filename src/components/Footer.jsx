import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="font-roboto footer  bottom-0 bg-pink-200 dark:bg-pink-900 text-black dark:text-white sm:footer-horizontal p-10">
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/all-services" className="link link-hover">Services</Link>
          <Link to="/addService" className="link link-hover">Add Service</Link>
          <Link to="/manageService" className="link link-hover">Manage Services</Link>
        </nav>
        <nav> 
          <h6 className="footer-title">Dashboard</h6>
          <Link to="/bookedServices" className="link link-hover">Booked Services</Link>
          <Link to="/serviceToDo" className="link link-hover">Service To Do</Link>
          <Link to="/auth/login" className="link link-hover">Login</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms" className="link link-hover">Terms of use</Link>
          <Link to="/privacy" className="link link-hover">Privacy policy</Link>
          <Link to="/cookies" className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
