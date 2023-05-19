import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://cat-rails-production2.s3.amazonaws.com/uploads/auction/item/image/79424/big_image_disney_world_logo.png" alt="Avatar" />
          </div>
        </label>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/02/Disney-World-Symbol.png" alt="Logo" />
        </div>
      </div>

      <div className="navbar-center ">
        <div className="hidden sm:flex">
          <Link to="/" className="mt-3 p-3">Home</Link>
          <Link to="/all-toys" className="mt-3 p-3">All Toys</Link>
          <Link to="/my-toys" className="mt-3 p-3">My Toys</Link>
          <Link to="/add-toy" className="mt-3 p-3">Add A Toy</Link>
          <Link to="/blog" className="mt-3 p-3">Blogs</Link>
          <Link to="/testimonials" className="mt-3 p-3">Testimonials</Link>
          <Link to="/featuredToys" className="mt-3 p-3">FeaturedToys</Link>
        </div>
        <div className="sm:hidden relative">
          <button
            type="button"
            className="mt-3 p-3 text-white hover:text-gray-700"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-base-200"
                >
                  Home
                </Link>
                <Link
                  to="/all-toys"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-base-200"
                >
                  All Toys
                </Link>
                <Link
                  to="/add-toy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-base-200"
                >
                  Add A Toy
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-base-200"
                >
                  Blogs
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      

      <div className="navbar-end">
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
