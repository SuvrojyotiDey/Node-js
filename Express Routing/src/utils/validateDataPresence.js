export const validateDataPresence = (data, id) => {
  return data.filter((e) => e.id === parseInt(id));
};
