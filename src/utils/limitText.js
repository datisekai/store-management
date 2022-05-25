const limitText = (string) => {
  if (string.length > 30) {
    return string.slice(0, 30) + "...";
  }
  return string;
};

export default limitText;
