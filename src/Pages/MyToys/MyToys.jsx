/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle('My Toys')

  // Fetch the user's toys from a database or API
  const fetchToys = () => {
    // Implement the logic to fetch the user's toys
    // and update the 'toys' state variable
  };

  // Handle toy update
  const handleUpdateToy = (toyId) => {
    // Implement the logic to handle toy update
    // You can show a modal or navigate to another route for updating the toy
  };

  // Handle toy deletion
  const handleDeleteToy = (toyId) => {
    // Implement the logic to handle toy deletion
    // Show a confirmation dialog and delete the toy if confirmed
  };

  useEffect(() => {
    fetchToys();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Toys</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Detail Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.availableQuantity}</td>
              <td className="py-2 px-4 border-b">{toy.detailDescription}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleUpdateToy(toy.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteToy(toy.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
