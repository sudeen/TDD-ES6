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
});
