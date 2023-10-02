/// <reference types="cypress" />

it('commands practice', () => {
    cy.visit('https://example.cypress.io/commands/querying')

    cy.wait(10000);

    cy.get('#query-btn').should('contain', 'Button')

    cy.get('.query-btn').should('contain', 'Button')

    cy.get('#querying .well>button:first').should('contain', 'Button')

    cy.get('[data-test-id="test-example"]').should('have.class','example')

    cy.get('[data-test-id="test-example"]').invoke('attr','data-test-id').should('equal','test-example')

    cy.get('[data-test-id="test-example"]').invoke('css','position').should('equal','static')

    cy.get('[data-test-id="test-example"]').should('have.attr','data-test-id','test-example').and('have.css', 'position','static')

    cy.root().should('match', 'html')

    cy.get('.query-ul').within(() => {
      // In this within, the root is now the ul DOM element
      cy.root().should('have.class', 'query-ul')
    }) 
  
  
  })

