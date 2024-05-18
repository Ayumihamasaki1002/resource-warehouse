export const getHouses = async (ownerId: string) => {
  return await fetch(`http://localhost:3000/warehouse/${ownerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
