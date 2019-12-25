function comp(arr1, arr2) {
  return !!arr1 && !!arr2 && (arr2 = arr2.sort((a,b) => a-b), arr1.sort((a,b) => a-b).every((e, i) => e ** 2 === arr2[i]));
}
