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

// 更新仓库名称
export const updateWarehouse = async (id: string, housename: string) => {
  return await fetch(`http://localhost:3000/warehouse`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      housename,
    }),
  });
};
