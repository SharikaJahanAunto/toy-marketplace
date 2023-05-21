import { useState } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const categories = [
    {
      name: "Cinderella Toys",
      toys: [
        {
          id: 1,
          name: "Cinderella Doll",
          price: "$10",
          rating: 4.5,
          image: "https://th.bing.com/th/id/OIP.f5zYmkhLqWODTAgfmZrRyQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7",
        },
        {
          id: 2,
          name: "Cinderella Box",
          price: "$15",
          rating: 3.8,
          image: "https://th.bing.com/th/id/OIP.twMXkOCoI9eZh3lQtM-FKQHaKl?w=133&h=189&c=7&r=0&o=5&pid=1.7",
        },
      ],
    },
    {
      name: "Barbie Doll Toys",
      toys: [
        {
          id: 3,
          name: "Barbie Doll",
          price: "$12",
          rating: 4.2,
          image: "https://th.bing.com/th/id/OIP.J05rutuo5uXOaj5PLAZhdAHaMF?w=115&h=182&c=7&r=0&o=5&pid=1.7",
        },
        {
          id: 4,
          name: "Brown Barbie",
          price: "$18",
          rating: 4.7,
          image: "https://th.bing.com/th/id/R.dca59dd34be8d790c4b048f1cc84b39f?rik=X8W1huPjYl%2brgg&pid=ImgRaw&r=0",
        },
      ],
    },
    {
      name: "Fairy Doll Toys",
      toys: [
        {
          id: 5,
          name: "Fairy Doll",
          price: "$20",
          rating: 4.9,
          image: "https://th.bing.com/th/id/R.e0b74fb841fa13c21e8e1abe46841f62?rik=kG%2bt3v89%2buM6%2fQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0246%2f6907%2fproducts%2ffairy_doll_blue_star_sparkle_fairy_wildflower_toys_1200x1200.jpg%3fv%3d1475102158&ehk=IWgX9gMG7JVrCdx4Ylz3V1uqqEaLJfaoKfr8MwrF5V0%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          id: 6,
          name: "Magical Fairies",
          price: "$16",
          rating: 4.1,
          image: "data:image/jpeg;base64,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",
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
