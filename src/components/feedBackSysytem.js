import React, { useState } from 'react';

function FeedBackSystem() {
  // State to manage form values
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    vehicle: '',
    purchaseDate: new Date().toISOString().slice(0, 10), // Set default to current date
    additionalNote: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sales Feedback</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="whatsappNumber" style={styles.label}>WhatsApp Number</label>
            <input
              type="text"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="vehicle" style={styles.label}>Vehicle Name</label>
            <select
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="" disabled>Select Vehicle</option>
              <option value="ntorq">NTorq</option>
              <option value="rtr">RTR</option>
              <option value="rr">RR</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="purchaseDate" style={styles.label}>Purchase Date</label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="additionalNote" style={styles.label}>Additional Note</label>
            <textarea
              id="additionalNote"
              name="additionalNote"
              value={formData.additionalNote}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    backgroundImage: 'url(/mesh-gradient.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to blend with background
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Semi-transparent background
    boxSizing: 'border-box',
    fontSize: '16px',
    color: '#333',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to blend with background
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Semi-transparent background
    boxSizing: 'border-box',
    minHeight: '120px',
    fontSize: '16px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '200px',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default FeedBackSystem;
