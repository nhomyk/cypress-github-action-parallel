describe('template spec 2', () => {
  it('cypress spec 2',{ tags: '@web' }, () => {
    cy.visit('https://www.cypress.io')
  })

  it('google spec 2',{ tags: '@web' }, () => {
    cy.visit('https://www.google.com')
  })

  it('amazon spec 2',{ tags: '@ecom' }, () => {
    cy.visit('https://www.amazon.com')
  })

  it('youtube spec 2',{ tags: '@social' }, () => {
    cy.visit('https://www.youtube.com')
  })

  it('medium spec 2',{ tags: '@social' }, () => {
    cy.visit('https://www.medium.com')
  })
})