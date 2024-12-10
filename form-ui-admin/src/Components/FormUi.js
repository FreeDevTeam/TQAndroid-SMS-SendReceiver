import React, { useState } from 'react';
import './style.css';

const submitFormData = async (secret, deviceID, to, message, sim) => {
  const url = `https://sms.ibnux.net/?secret=${encodeURIComponent(secret)}&deviceID=${encodeURIComponent(deviceID)}&to=${encodeURIComponent(to)}&text=${encodeURIComponent(message)}&sim=${encodeURIComponent(sim)}`;
  
  try {
    const response = await fetch(url, { method: 'GET' });

    if (response.ok) {
      const responseData = await response.text();
      console.log('Success:', responseData);
      alert('Message sent successfully!');
    } else {
      console.error('Error:', response.statusText);
      alert('Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message.');
  }
};

const FormUI = () => {
  const [formData, setFormData] = useState({
    secret: '',
    deviceID: '',
    to: '',
    message: '',
    sim: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { secret, deviceID, to, message, sim } = formData;
    submitFormData(secret, deviceID, to, message, sim);
  };

  return (
    <div className="container">
      <h1>Test it here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="secret">Secret</label>
        <input
          type="text"
          id="secret"
          value={formData.secret}
          onChange={handleChange}
          placeholder=""
        />

        <label htmlFor="deviceID">Device ID</label>
        <input
          type="text"
          id="deviceID"
          value={formData.deviceID}
          onChange={handleChange}
          placeholder=""
        />

        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="Phone number"
        />
        <small>
          For USSD, start with * and end with #, example: *123#<br />
          Message required but ignored
        </small>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder=""
        ></textarea>

        <label htmlFor="sim">SIM CARD Number</label>
        <input
          type="number"
          id="sim"
          value={formData.sim}
          onChange={handleChange}
          placeholder="0"
        />
        <small>1/2/3/4, 0 for default SIM</small>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUI;
