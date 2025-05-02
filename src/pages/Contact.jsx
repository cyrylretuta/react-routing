import { useState } from 'react';
import ContactForm from './ContactForm';
import FormSummary from './FormSummary';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleFormSubmit} />
      <FormSummary formData={formData} />
    </div>
  );
}

export default ContactPage;