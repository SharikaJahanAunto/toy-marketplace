import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://cat-rails-production2.s3.amazonaws.com/uploads/auction/item/image/79424/big_image_disney_world_logo.png" />
          </div>
        </label>
        <div className="w-40">

          <img src="https://logos-world.net/wp-content/uploads/2021/02/Disney-World-Symbol.png"></img>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/' className="mt-3 p-3">Home</Link>
        <Link className="mt-3 p-3">All Toys</Link>
        <Link className="mt-3 p-3">My Toys</Link>
        <Link className="mt-3 p-3">Add A Toy</Link>
        <Link to='/blog' className="mt-3 p-3">Blogs</Link>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;