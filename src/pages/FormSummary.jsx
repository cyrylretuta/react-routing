function FormSummary({ formData }) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h2>Form Summary</h2>
        {formData.name && (
          <div>
            <strong>Name:</strong> {formData.name}
          </div>
        )}
        {formData.email && (
          <div>
            <strong>Email:</strong> {formData.email}
          </div>
        )}
        {formData.message && (
          <div>
            <strong>Message:</strong> {formData.message}
          </div>
        )}
      </div>
    );
  }
  
  export default FormSummary;  