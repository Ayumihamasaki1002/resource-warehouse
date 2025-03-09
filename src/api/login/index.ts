// 用户登录接口
interface type {
  username: string;
  password: string;
}

export async function userLogin(params: type) {
  return fetch('http://localhost:3000/auth/login', {
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
      if (data.statusCode === 400) {
        localStorage.removeItem('token');
        const token = data.token;
        localStorage.setItem('token', token);
        return { message: data.message, statusCode: data.statusCode };
      }
      if (data.token) return true; // 登录成功
      return false; // 服务器没响应
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
