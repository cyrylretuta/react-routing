import ServiceCard from './ServiceCard';

function Services() {
  // List of services
  const services = [
    { title: "Web Design", description: "Professional UI/UX" },
    { title: "SEO Optimization", description: "Increase your website ranking" },
    { title: "App Development", description: "Build mobile apps for all platforms" },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div>
        {/* Render ServiceCard components dynamically */}
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Services;