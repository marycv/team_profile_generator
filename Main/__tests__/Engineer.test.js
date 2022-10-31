const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Mark', 2, "mark@email.com", "markgithub");

describe('Engineer class', () => {
    describe('getName method', () => {
        it('should return the engineer name', () => {
            expect(engineer.getName()).toBe("Mark")
        })
    })
    describe('getId method', () => {
        it('should return the engineer Id', () => {
            expect(engineer.getId()).toBe(2)
        })
    })
    describe('getEmail method', () => {
        it('should return the engineer email', () => {
            expect(engineer.getEmail()).toBe('mark@email.com')
        })
    })
    describe('getGithub method', () => {
        it('should return the engineer Github', () => {
            expect(engineer.getGithub()).toBe('markgithub')
        })
    })
});