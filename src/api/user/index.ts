interface type {
  nickname?: string;
  juejin?: string;
  intro?: string;
  csdn?: string;
  github?: string;
  email?: string;
  avatar?: string;
  id?: string;
}

// 更新用户信息
export async function updateUserInfo(params: type) {
  // 发送请求到后端更新用户信息
  const id = localStorage.getItem('id');
  fetch(`http://localhost:3000/user/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nickname: params.nickname,
      juejin: params.juejin,
      intro: params.intro,
      csdn: params.csdn,
      github: params.github,
      email: params.email,
      avatar: params.avatar,
    }),
  })
    .then((response) => response.json())
    .then(() => {})
    .catch((error) => {
      console.error('Error:', error);
    });
}

// 获取用户信息

export async function getUserInfo(token: string) {
  return fetch(`http://localhost:3000/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
