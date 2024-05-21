// 获取全部内容
export const getHouses = async (ownerId: string) => {
  return await fetch(`http://localhost:3000/warehouse/${ownerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// 只拿仓库和文件夹相关信息
export const getHouseLists = async (ownerId: string) => {
  return await fetch(`http://localhost:3000/warehouse/fast/${ownerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
