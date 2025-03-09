// 用户注册接口
interface type {
  username: string;
  password: string;
}

export async function userRegister(params: type) {
  return fetch('http://localhost:3000/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: params.username,
      password: params.password,
      role: 'visitor',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
