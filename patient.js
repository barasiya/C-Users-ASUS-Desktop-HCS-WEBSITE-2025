document.getElementById('register-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
  
    // Validate fields
    if (name === '' || email === '' || phone === '' || address === '' || dob === '') {
      alert('Please fill all fields!');
      return;
    }
  
    // Mock patient registration (replace with actual API call)
    const patientInfo = {
      name,
      email,
      phone,
      address,
      dob
    };
  
    localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
  
    document.getElementById('patient-info').innerHTML = `
      <h3>Patient Information:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <p>Date of Birth: ${dob}</p>
    `;
  });