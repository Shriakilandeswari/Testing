it('window',()=>{

    cy.visit('https://example.cypress.io/commands/window')

    cy.window().should('have.property','top').wait(5000)

    cy.document().should('have.property','charset').and('eq','UTF-8').wait(5000)

    cy.title().should('include','Kitchen Sink').wait(5000)
})

