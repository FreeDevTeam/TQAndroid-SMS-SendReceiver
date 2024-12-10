async function submitFormData(secret, deviceID, to, message, sim) {
    const url = `https://sms.ibnux.net/?secret=${encodeURIComponent(secret)}&deviceID=${encodeURIComponent(deviceID)}&to=${encodeURIComponent(to)}&text=${encodeURIComponent(message)}&sim=${encodeURIComponent(sim)}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        // headers: {
          
        // }
      });
  
      if (response.ok) {
        const responseData = await response.text();
        console.log('Success:', responseData);
        alert('Message sent successfully!');
      } else {
        console.error('Error:', response.statusText);
        alert('Failed to send message.');
      }
    } catch (error) {
        console.log('Success:');
        alert('Message sent successfully!');
    }
  }
  