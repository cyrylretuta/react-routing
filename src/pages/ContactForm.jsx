function ContactForm({ formData, setFormData, handleSubmit }) {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <div style={{ marginBottom: '15px' }}>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Submit
        </button>
      </form>
    );
  }
  
  export default ContactForm;  