const Intern = require("../lib/Intern");

it("Can set School name via constructor", () => {
  const testValue = "RassaFrass State";
  const int = new Intern("Hank", 1, "HillKing@test.com", testValue);
  expect(int.school).toBe(testValue);
});

it("should return \"Intern\" via getRole()", () => {
  const testValue = "Intern";
  const int = new Intern("Hank", 1, "HillKing@test.com", "GitHubUser");
  expect(int.getRole()).toBe(testValue);
});

it("should return a School via getSchool() ", () => {
  const testValue = "RassaFrass State";
  const int = new Intern("Hank", 1, "HillKing@test.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});

