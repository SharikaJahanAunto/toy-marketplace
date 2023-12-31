/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialBtn = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
  const location = useLocation()
  console.log('login page location', location);
  const from = location.state?.from?.pathname || '/toyDetails/:id'
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
          navigate(from, {replace : true})
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };

  return (
    <div>
      <button onClick={handleGoogleLogin} className="bg-red-400 text-white py-2 px-4 rounded-md ml-2">
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Google Sign-in
      </button>
    </div>
  );
};

export default SocialBtn;
