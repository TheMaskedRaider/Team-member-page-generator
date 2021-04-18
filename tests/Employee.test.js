const Employee = require("../lib/Employee");


describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const emp = new Employee();
        expect(typeof (emp)).toBe("object");
    });

    it("Can set a name when creating a new object.", () => {
        const name = "Bill";
        const emp = new Employee(name)
        expect(emp.name).toBe(name);
    });

    it("Can set an id when creating a new object.", () => {
        const id = 3;
        const emp = new Employee("Bill", id)
        expect(emp.id).toBe(id);
    });

    it("Can set a email  when creating a new object.", () => {
        const email = "Bill@bob.com";
        const emp = new Employee("Bil", 3, email)
        expect(emp.email).toBe(email);
    });
    describe("getName", () => {
        it("Can return a name via gitName()", () => {
            const testInput = "Fred";
            const eName = new Employee(testInput);
            expect(eName.getName()).toBe(testInput);
        })
    });

    describe("getId", () => {
        it("Can return an id via gitId()", () => {
            const testInput = 1;
            const eId = new Employee("Fred",testInput);
            expect(eId.getId()).toBe(testInput);
        })
    });


    describe("getEmail", () => {
        it("Can return an email via gitEmail()", () => {
            const testInput = "Fred@Freddyson.com";
            const eMail = new Employee("Fred",1, testInput);
            expect(eMail.getEmail()).toBe(testInput);
        })
    });


});

