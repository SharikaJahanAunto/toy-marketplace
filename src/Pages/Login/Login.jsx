import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Example: You can check the email and password against your authentication system
    // If successful, redirect the user to the desired page
    // If unsuccessful, set the error message

    setError('Invalid email or password'); // Example error message
  };

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
        <Link to="/registration" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
      {/* Google Sign-in button */}
      {/* ... */}
    </div>
  );
};

export default Login;
