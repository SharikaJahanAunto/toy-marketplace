import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() =>{
    fetch('https://toy-marketplace-server-mocha.vercel.app/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  // useEffect(() => {
  //   fetchToys();
  // }, []);

  // const fetchToys = async () => {
  //   try {
  //     const response = await fetch("https://toy-marketplace-server-mocha.vercel.app/toys");
  //     const data = await response.json();
  //     setToys(data);
  //   } catch (error) {
  //     console.log("Error fetching toys:", error);
  //   }
  // };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredToys = toys.filter((toy) =>
  //   toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Toys</h2>

      <input
        type="text"
        placeholder="Search by Toy Name"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full py-2 px-4 border border-gray-300 rounded-md mb-4"
      />

      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 font-medium text-gray-700">Seller</th>
            <th className="py-2 px-4 font-medium text-gray-700">Toy Name</th>
            <th className="py-2 px-4 font-medium text-gray-700">Sub-category</th>
            <th className="py-2 px-4 font-medium text-gray-700">Price</th>
            <th className="py-2 px-4 font-medium text-gray-700">Available Quantity</th>
            <th className="py-2 px-4 font-medium text-gray-700">View Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.slice(0, 20).map((toy) => (
            <tr
              key={toy._id.$oid}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="py-2 px-4">{toy.seller}</td>
              <td className="py-2 px-4">{toy.toyName}</td>
              <td className="py-2 px-4">{toy.subCategory}</td>
              <td className="py-2 px-4">${toy.price}</td>
              <td className="py-2 px-4">{toy.quantity}</td>
              <td className="py-2 px-4">
                <Link
                  to={`/toyDetails/${toy._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
