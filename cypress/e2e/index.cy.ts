describe('E2E Test', () => {
	it('should visit index page', () => {
		cy.visit('http://localhost:5173')
		cy.get('h2.title').contains('Dota2 Timer Reminder')
		cy.get('input.now').valueOf(0)
		cy.get('button.start').contains('Start')
	})
})