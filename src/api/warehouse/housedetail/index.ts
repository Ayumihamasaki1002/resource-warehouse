export const getSingleHouseDetail = async (id: string, fileId: string) => {
  await fetch(`http://localhost:3000/housedetail/${id}/${fileId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
