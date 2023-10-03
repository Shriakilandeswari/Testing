/// <reference types="cypress" />

it('location',()=>{
    cy.visit('https://example.com/')
    cy.hash().should('be.empty')

    cy.url().should('eq', 'https://example.com/')

    cy.location().should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('https://example.com/')
        expect(location.host).to.eq('example.com')
        expect(location.hostname).to.eq('example.com')
        expect(location.origin).to.eq('https://example.com')
        expect(location.pathname).to.eq('/')
        expect(location.port).to.eq('')
        expect(location.protocol).to.eq('https:')
        expect(location.search).to.be.empty
      })
})

