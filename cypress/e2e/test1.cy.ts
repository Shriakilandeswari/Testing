/// <reference types="cypress" />

it('Google Search',()=>{
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation Step by Step{Enter}')

    //cy.wait(1000)
    cy.contains('Videos').click()

    cy.contains('Automation Step by Step Channel - YouTube').click()

    // cy.wait(2000)
    // cy.contains('Google Search').click()
    
})