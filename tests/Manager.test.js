const Manager = require("../lib/Manager");

it("can set Office Number account via constructor", () => {
  const testValue = 43;
  const man = new Manager("Jack", 1, "Jack@Jill.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

it("should return \"Manager\" via getRole()", () => {
  const testValue = "Manager";
  const man = new Manager("Bob", 1, "Jack@Jill.com", "GitHubUser");
  expect(man.getRole()).toBe(testValue);
});

it("should return the office number via getOffice()", () => {
  const testValue = 43;
  const man = new Manager("Jack", 1, "Jack@Jill.com", testValue);
  expect(man.getOffice()).toBe(testValue);
});

