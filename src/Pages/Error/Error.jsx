import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Error = () => {
  useTitle('Error')
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <img src="https://th.bing.com/th/id/OIP.HNNwvX61ujRn5lNIDTP5dgHaE8?pid=ImgDet&rs=1" alt="Page not found" className="error-image" />
      <p className="error-description">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="error-link"><strong>Go back to homepage</strong></Link>
    </div>
  );
};

export default Error;
