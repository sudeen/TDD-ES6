import { isEqual } from "lodash";
import { getLetterCount } from "./letter-count";

export const isAnagram = (string1, string2) => {
  const string1LetterCount = getLetterCount(string1);
  const string2LetterCount = getLetterCount(string2);

  return isEqual(string1LetterCount, string2LetterCount);
};
