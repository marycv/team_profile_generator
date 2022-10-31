const Manager = require('../lib/Manager');
const manager = new Manager('Jared', 5, 'jared@email.com', 1);

describe('Manager class', () => {
    describe('getName method', () => {
        it('should return the manager name', () => {
            expect(manager.getName()).toBe("Jared")
        })
    })
    describe('getId method', () => {
        it('should return the manager Id', () => {
            expect(manager.getId()).toBe(5)
        })
    })
    describe('getEmail method', () => {
        it('should return the manager email', () => {
            expect(manager.getEmail()).toBe('jared@email.com')
        })
    })
    describe('getOfficeNumber method', () => {
        it('should return the manager office number', () => {
            expect(manager.getOfficeNumber()).toBe(1)
        })
    })
});