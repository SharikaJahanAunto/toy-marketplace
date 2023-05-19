
const FeaturedToys = () => {
  const featuredToys = [
    {
      id: 1,
      name: "Mickey Mouse Plush Toy",
      image: "mickey-plush.jpg",
      description: "Cuddle up with this adorable Mickey Mouse plush toy and bring the magic of Disney into your home.",
    },
    {
      id: 2,
      name: "Princess Castle Playset",
      image: "princess-castle.jpg",
      description: "Let your child's imagination soar with this enchanting princess castle playset, complete with royal accessories.",
    },
    // Add more featured toys
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
