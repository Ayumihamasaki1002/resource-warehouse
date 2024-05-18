export const getHouses = async (ownerId: string) => {
  await fetch(`http://localhost:3000/warehouse/${ownerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.warehouses;
    });
};
