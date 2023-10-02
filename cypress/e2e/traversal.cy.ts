/// <reference types="cypress" />

it('traversal', () => {
    cy.visit('https://example.cypress.io/commands/traversal')

    cy.get('.traversal-breadcrumb').children('.active').should('contain','Data')

    cy.get('.traversal-badge').closest('ul').should('have.class','list-group')

    cy.get('.traversal-list > li').eq(0).should('contain','tabby')

    cy.get('.nav-tabs > li').filter('.active').should('contain','About')

    cy.get('.pagination').find('li').find('a').should('have.length',7)
 
    cy.get('.traversal-table td').first().should('contain','1')

    cy.get('.traversal-buttons .btn').last().should('contain','Submit')

    cy.get('.traversal-ul').contains('apples').next().should('contain','oranges')

    cy.get('.traversal-next-all').contains('apples').nextAll().should('have.length',4)

    cy.get('#fruits').nextUntil('#nuts').should('have.length',7)

    cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain','Disabled')

    cy.get('.traversal-mark').parent().should('contain','Morbi leo risus')

    cy.get('.traversal-cite').parents().should('match','blockquote')

    cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length',2)

    cy.get('.birds').find('.active').prev().should('contain','Lorikeets')

    cy.get('.fruits-list').find('.third').prevAll().should('have.length',2)

    cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length',3)

    cy.get('.traversal-pills .active').siblings().should('have.length',2)


})

