'use client';
interface type {
  username: string;
  password: string;
}

export async function userLogin(params: type) {
  fetch('http://localhost:3001/auth/login', {
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
    .then(() => {
      //   console.log('Success:', data);
      //   const userData = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
