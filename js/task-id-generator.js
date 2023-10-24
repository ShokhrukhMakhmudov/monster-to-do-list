const taskIdGenerator = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 10000);
  let uniqueId = timestamp.toString() + randomNumber.toString();
  if (uniqueId.length < 16) {
    uniqueId = uniqueId.padStart(16, "0");
  }
  return uniqueId;
};

export default taskIdGenerator;
