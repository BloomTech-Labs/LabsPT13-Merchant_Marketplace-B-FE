export const formatDate = date => {
  let d = new Date(date).toDateString().split(' ');

  return `${d[1]} ${d[2]}, ${d[3]}`;
};
