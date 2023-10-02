/// <reference types="cypress" />

it('commands practice', () => {
    cy.visit('https://example.cypress.io')

    cy.wait(10000);

    cy.get('#query-btn').should('contain', 'Button')

    cy.get('.query-btn').should('contain', 'button')

    cy.get('#quering .well>button').should('contain', 'Button')

    cy.get('[data-test-id="test-example"]').should('have.class','example')

    cy.get('[data-test-id="test-example"]').invoke('attr','data-test-id').should('equal','test-example')

    cy.get('[data-test-id="test-example"]').invoke('css','position').should('equal','static')

    cy.get('[data-test-id="test-example"]').should('have.attr','data-test-id','test-example').and('have.css', 'position','static')
  })

