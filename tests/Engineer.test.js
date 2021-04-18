const Engineer = require("../lib/Engineer");

it("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Bob", 1, "Bob@bill.com", testValue);
  expect(eng.github).toBe(testValue);
});

it("should return \"Engineer\" via getRole()", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Bob", 1, "Bob@bill.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

it("should return a GitHub User via getGitHub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Bob", 1, "Bob@bill.com", testValue);
  expect(eng.getGithub()).toBe(testValue);
});

