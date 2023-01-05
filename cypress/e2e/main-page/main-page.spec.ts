describe('main page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should work', () => {
		cy.findByText('Hello world').should('exist');
	});
});
