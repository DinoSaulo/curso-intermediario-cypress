/// <reference types="Cypress" />

describe('login', () => {
    it('Sucess fully', () => {

        cy.login()

        cy.get('.qa-user-avatar').should('exist')
    })
})