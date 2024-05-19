import { getUserInfo } from '@/api/user';

// 获取用户ID 和 avatar链接
export const getId = async () => {
  const token = localStorage.getItem('token');
  if (
    localStorage.getItem('id') &&
    localStorage.getItem('avatar') &&
    localStorage.getItem('username') &&
    localStorage.getItem('id') !== 'undefined' &&
    localStorage.getItem('avatar') !== 'undefined' &&
    localStorage.getItem('username') !== 'undefined'
  )
    return;
  if (token)
    await getUserInfo(token)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('avatar', data.avatar);
        localStorage.setItem('username', data.username);
      });
};
