
const Gallery = () => {
  const toys = [
    {
      image: 'https://th.bing.com/th?id=OIP.86gyX1itsA7zrTj_dqhevAAAAA&w=185&h=337&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      title: "Mr Incredible toy",
      description: 'Mr Incredible toy - Join Mr Incredible on his heroic adventures and relive the excitement of the movie.',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.p_8vH6CZvHkpP0x3nUWBjgHaK7?w=115&h=180&c=7&r=0&o=5&pid=1.7',
      title: "Joy Inside Out toy",
      description: 'Joy Inside Out toy - Let your child explore the colorful world of emotions with this delightful Joy toy.',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.tXyFl9t18m0ChRa5BVKT6gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      title: "Super Man",
      description: 'Super Man - Unleash your child\'s imagination with this powerful Super Man action figure.',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.eF7VZpK6vw0GzOjwOnhjhwHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7',
      title: "Insect toy",
      description: 'Insect toy - Explore the fascinating world of insects with this educational and fun toy set.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome To Disney Toy Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {toys.map((toy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img src={toy.image} alt={`Toy ${index + 1}`} className="w-full h-48 object-contain rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{toy.title}</h3>
                <p className="text-gray-600">{toy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
      <button className="btn btn-primary w-40">Explore More</button>

      </div>
    </section>
  );
};

export default Gallery;
