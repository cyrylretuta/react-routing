function ServiceCard({ title, description }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default ServiceCard;