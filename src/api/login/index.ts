'use client';
interface type {
  username: string;
  password: string;
}

export async function userLogin(params: type) {
  fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: params.username,
      password: params.password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token;
      localStorage.setItem('token', token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}