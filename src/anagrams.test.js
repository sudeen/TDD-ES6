import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
  // "listen" "silent"
  // "elbow" "below"
  it("returns true when two known anagrams are passed", () => {
    const expected = true;
    const actual = isAnagram("listen", "silent");
    expect(actual).to.equal(expected);
  });

  // "elbows" "below"
  it("returns false when either of the string has extra letters", () => {
    const expected = false;
    const actual = isAnagram("elbows", "below");
    expect(actual).to.equal(expected);
    const actual2 = isAnagram("below", "elbows");
    expect(actual2).to.equal(expected);
  });
});
