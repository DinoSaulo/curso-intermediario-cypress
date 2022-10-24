/// <reference types="Cypress" />

const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('cloneViaSSH', project => {

    const domain = Cypress.config('baseUrl').replace('http://', '').replace('/', '')

    cy.exec(`cd temp/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)

})
