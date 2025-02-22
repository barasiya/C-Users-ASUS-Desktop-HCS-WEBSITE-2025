document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate fields
    if (username === '' || password === '') {
      alert('Please fill all fields!');
      return;
    }
  
    // Mock authentication (replace with actual authentication logic)
    if (username === 'doctor' && password === 'password') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials!');
    }
  });



