/* eslint-disable no-undef */
import { useParams, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
  const { id } = useParams();
  console.log(id);
  // const [toyDetails, setToyDetails] = useState(null);

  const data = useLoaderData()
  console.log(data)
  useTitle('Toy Details')
  // useEffect(() => {
  //   const fetchToyDetails = async () => {
  //     try {
  //       const response = await fetch(`https://toy-marketplace-server-mocha.vercel.app/toys/${id}`);
  //       const data = await response.json();
  //       setToyDetails(data);
  //     } catch (error) {
  //       console.error('Error fetching toy details:', error);
  //     }
  //   };
  
  //   fetchToyDetails();
  // }, [id]);

  // if (!toyDetails) {
  //   return <div>Loading toy details...</div>;
  // }

  const { picture, toyName, seller, sellerEmail, price, rating, quantity, description, subCategory } = data;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={picture} alt={toyName} className="rounded-lg w-50 h-50" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{toyName}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Seller:</span> {seller}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Seller Email:</span> {sellerEmail}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Available Quantity:</span> {quantity}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Sub-category:</span> {subCategory}
          </p>
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mx-3 rounded">
            Add to Cart
          </button>
          <button
          type="submit"
          className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
