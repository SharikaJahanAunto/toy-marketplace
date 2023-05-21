import './FeaturedToys.css'; // Import the CSS file for the component

const FeaturedToys = () => {
  const featuredToys =  [
    {
      id: 1,
      name: "Mickey Mouse Plush Toy",
      image: "https://th.bing.com/th?id=OIP.BG5AElXVF3IfQ5c00Xmn0gHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      description: "Cuddle up with this adorable Mickey Mouse plush toy and bring the magic of Disney into your home.",
    },
    {
      id: 2,
      name: "Princess Castle Playset",
      image: "https://th.bing.com/th?id=OIP.4PPEItEYvWMSWsbyupzdwQHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      description: "Let your child's imagination soar with this enchanting princess castle playset, complete with royal accessories."
    },
    {
      id: 3,
      name: "Castle Playset",
      image: "https://th.bing.com/th?id=OIP.pB49t5zHhsRPOctUxLRm7AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      description: "Let your child's imagination soar with this enchanting princess castle playset, complete with royal accessories."
    }
  ];

  return (
    <section className="featured-toys">
      <h2 className="section-title">Featured Toys</h2>
      <div className="toy-list">
        {featuredToys.map((toy) => (
          <div className="toy-item" key={toy.id}>
            <img src={toy.image} alt={toy.name} className="toy-image" />
            <h3 className="toy-name">{toy.name}</h3>
            <p className="toy-description">{toy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedToys;
