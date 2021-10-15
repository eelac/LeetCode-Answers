var finalValueAfterOperations = (operations) => {
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    eval(operations[i]);
  }
  return X;
};
