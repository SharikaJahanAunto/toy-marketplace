/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialBtn from '../../shared/SocialBtn/SocialBtn';

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  console.log('login page location', location);
  const from = location.state?.from?.pathname || '/toyDetails/:id'
  useTitle('Login')


  
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.log(error);
        })

      }
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Please Login</h2>
      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Dont have an account?{' '}
        <Link to="/register" className="text-blue-500 underline">
          Register here
        </Link>
        <br />
        <br />
     <SocialBtn></SocialBtn>
      </p>
    </div>
  );
};

export default Login;
