import firstLetter from "./firstLetter";

it("finds first letter with resolves", () => {
  expect.assertions(1);
  expect(firstLetter("Leigh")).resolves.toBe("L");
});

it("finds first letter with async/await", async () => {
  const letter = await firstLetter("Leigh");
  expect(letter).toBe("L");
});

it("fails when null is passed", async () => {
  try {
    await firstLetter(5);
  } catch (e) {
    expect(e).toEqual({
      error: 'Must pass non-empty string but received "5" (number)'
    });
  }
});
