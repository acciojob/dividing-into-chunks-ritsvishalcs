const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    // Convert prompt string to number if needed
    let number = typeof num === 'string' ? parseInt(num) : num;

    if (currentSum + number <= n) {
      current.push(number);
      currentSum += number;
    } else {
      result.push(current);
      current = [number];
      currentSum = number;
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
