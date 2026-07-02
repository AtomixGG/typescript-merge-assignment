export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[],
): number[] {
  const merged12 = mergeAscendingWithDescending(collection1, collection2);
  return mergeTwoAscendingArrays(merged12, collection3);
}

function mergeAscendingWithDescending(ascending: number[], descending: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = descending.length - 1;

  while (leftIndex < ascending.length && rightIndex >= 0) {
    const leftValue = ascending[leftIndex]!;
    const rightValue = descending[rightIndex]!;

    if (leftValue <= rightValue) {
      result.push(leftValue);
      leftIndex += 1;
    } else {
      result.push(rightValue);
      rightIndex -= 1;
    }
  }

  while (leftIndex < ascending.length) {
    result.push(ascending[leftIndex]!);
    leftIndex += 1;
  }

  while (rightIndex >= 0) {
    result.push(descending[rightIndex]!);
    rightIndex -= 1;
  }

  return result;
}

function mergeTwoAscendingArrays(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftValue = left[leftIndex]!;
    const rightValue = right[rightIndex]!;

    if (leftValue <= rightValue) {
      result.push(leftValue);
      leftIndex += 1;
    } else {
      result.push(rightValue);
      rightIndex += 1;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]!);
    leftIndex += 1;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]!);
    rightIndex += 1;
  }

  return result;
}

const sample = merge([1, 4, 7], [9, 6, 3, 1, 0], [2, 5, 8]);
console.log("Merged result:", sample);
