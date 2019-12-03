export const isAnagram = (string1, string2) => {
  const string1Letters = string1.split("");
  const string2Letters = string2.split("");

  return string1Letters.every(letter => string2Letters.includes(letter));
};
