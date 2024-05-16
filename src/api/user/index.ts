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

export async function updateUserInfo(params: type) {
  fetch(`http://localhost:3000/user/${params.id}`, {
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
