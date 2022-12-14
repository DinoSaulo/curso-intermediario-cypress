/// <reference types="Cypress" />

const faker = require('faker')

describe('Set label on issue', () => {

    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
    }

    const milestone = {
        title: `milestone-${faker.random.word()}`
    }

    beforeEach(() => {
        cy.login()
        cy.api_createIssue(issue)
            .then(response => {
                cy.api_createMilestone(response.body.project_id, milestone)
                cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
        })
    })

    it('Successfully', () => {
        cy.gui_setMilestoneOnIssue(milestone)

        cy.get('.block.milestone', { timeout: 6000 }).should('contain', milestone.title)
    })

})