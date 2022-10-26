function nth_most_rateSignature(list, n) {
  let memory = {};
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (memory[element]) {
      memory[element] += 1;
    } else {
      memory[element] = 1;
    }
  }

  //   return memory[n];
  const valueKeyMap = {};
  const values = [];
  for (const [key, value] of Object.entries(memory)) {
    valueKeyMap[value] = key;
    values.push(value);
  }

  const sortedOccurence = values.sort((x, y) => x - y);
  const leastOccurencePosition = sortedOccurence[n - 1];
  return valueKeyMap[leastOccurencePosition];
}

console.log(
  nth_most_rateSignature([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5], 2)
);
