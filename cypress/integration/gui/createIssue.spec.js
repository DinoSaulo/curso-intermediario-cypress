/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue', () => {

    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    it('Successfully', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })

})