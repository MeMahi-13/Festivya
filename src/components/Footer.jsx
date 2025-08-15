import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-roboto bg-pink-200 dark:bg-pink-900 text-black dark:text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Explore Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h6 className="footer-title text-lg font-semibold">Explore</h6>
          <ul className="flex flex-col sm:flex-row gap-4">
            <li>
              <Link to="/" className="link link-hover hover:text-pink-600 dark:hover:text-pink-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-services" className="link link-hover hover:text-pink-600 dark:hover:text-pink-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link link-hover hover:text-pink-600 dark:hover:text-pink-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className="link link-hover hover:text-pink-600 dark:hover:text-pink-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Festivya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
