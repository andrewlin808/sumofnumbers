const arr = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(arr));

function sumWhile(nums) {
  let i = 0;
  let sum = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(arr));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(arr));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(arr));
