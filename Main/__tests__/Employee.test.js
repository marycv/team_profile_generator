const Employee = require('../lib/Employee');
const employee = new Employee('Mary', 1, "mary@email.com")

describe('Employee class', () => {
    describe('getName method', () => {
        it('should return the employee name', () => {
            expect(employee.getName()).toBe("Mary")
        })
    })
    describe('getId method', () => {
        it('should return the employee id', () => {
            expect(employee.getId()).toBe(1)
        })
    })
    describe('getEmail method', () => {
        it('should return the employee email', () => {
            expect(employee.getEmail()).toBe("mary@email.com")
        })
    })
});