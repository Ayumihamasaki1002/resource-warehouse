export const getSingleHouseDetail = async (id: string, fileId: string) => {
  return await fetch(`http://localhost:3000/housedetail/${id}/${fileId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const updateHouseDetail = async (fileId: string, fileContent?: string, fileName?: string) => {
  return await fetch(`http://localhost:3000/housedetail/${fileId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileName,
      fileContent,
    }),
  });
};

// 删除文件
export const deleteHousedetail = async (id: string) => {
  return await fetch(`http://localhost:3000/housedetail/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
