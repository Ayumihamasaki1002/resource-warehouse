// 用户注册接口
interface type {
  username: string;
  password: string;
}

export async function userRegister(params: type) {
  fetch('http://localhost:3000/user/register', {
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
    .then(() => {
      window.location.href = '/loginPage/login'; // 注册成功后跳转到登录页面
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
