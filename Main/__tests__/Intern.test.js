const Intern = require('../lib/Intern');
const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

describe('Intern class', () => {
    describe('getName method', () => {
        it('should return the intern name', () => {
            expect(intern.getName()).toBe('John')
        })
    })
    describe('getId method', () => {
        it('should return the intern Id', () => {
            expect(intern.getId()).toBe(5)
        })
    })
    describe('getEmail method', () => {
        it('should return the intern email', () => {
            expect(intern.getEmail()).toBe('john@fakemail.com')
        })
    })
    describe('getSchool method', () => {
        it('should return the intern school', () => {
            expect(intern.getSchool()).toBe('2University')
        })
    })
});