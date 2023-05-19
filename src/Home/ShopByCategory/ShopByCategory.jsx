import { useState } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const categories = [
    {
      name: "Math Toys",
      toys: [
        {
          id: 1,
          name: "Toy A",
          price: "$10",
          rating: 4.5,
          image: "toy_a.jpg",
        },
        {
          id: 2,
          name: "Toy B",
          price: "$15",
          rating: 3.8,
          image: "toy_b.jpg",
        },
      ],
    },
    {
      name: "Language Toys",
      toys: [
        {
          id: 3,
          name: "Toy C",
          price: "$12",
          rating: 4.2,
          image: "toy_c.jpg",
        },
        {
          id: 4,
          name: "Toy D",
          price: "$18",
          rating: 4.7,
          image: "toy_d.jpg",
        },
      ],
    },
    {
      name: "Engineering Toys",
      toys: [
        {
          id: 5,
          name: "Toy E",
          price: "$20",
          rating: 4.9,
          image: "toy_e.jpg",
        },
        {
          id: 6,
          name: "Toy F",
          price: "$16",
          rating: 4.1,
          image: "toy_f.jpg",
        },
      ],
    },
  ];

  const handleViewDetails = () => {
    const isLoggedIn = false; // Replace with your authentication logic
    if (!isLoggedIn) {
      alert("You have to log in first to view details");
      // Redirect to login page
    } else {
      // Redirect to toy details page
    }
  };

  return (
    <div className="flex justify-center">
      <div className="shop-by-category">
        <div className="tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="sub-categories flex flex-col md:flex-row justify-between gap-10 py-12">
          {categories[activeTab].toys.map((toy) => (
            <div className="toy-card" key={toy.id}>
              <img src={toy.image} alt={toy.name} className="toy-image" />
              <div className="toy-details">
                <h3 className="toy-name">{toy.name}</h3>
                <p className="toy-price">{toy.price}</p>
                <div className="toy-rating">
                  <span className="rating-stars">{toy.rating}</span> stars
                </div>
              </div>
              <Link to='/login'
                className="btn btn-primary"
                onClick={() => handleViewDetails(toy.id)}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
