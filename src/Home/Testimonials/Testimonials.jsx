
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote: "The Disney toys exceeded my expectations! My kids absolutely love playing with them and creating their own magical adventures.",
      image: "testimonial1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "I'm amazed by the quality and attention to detail in the Disney toys. They truly capture the essence of the characters and bring joy to our home.",
      image: "testimonial2.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "I'm amazed by the quality and attention to detail in the Disney toys. They truly capture the essence of the characters and bring joy to our home.",
      image: "testimonial2.jpg",
    },
    
  ];

  return (
    <section className="testimonials bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div className="testimonial-item bg-white p-6 rounded shadow" key={testimonial.id}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="testimonial-name text-lg font-bold mb-2">{testimonial.name}</h3>
              <p className="testimonial-quote text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
