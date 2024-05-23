describe('template spec 1', () => {
  it('cypress spec 1',{ tags: '@web' }, () => {
    cy.visit('https://www.cypress.io')
  })

  it('google spec 1',{ tags: '@web' }, () => {
    cy.visit('https://www.google.com')
  })

  it('amazon spec 1',{ tags: '@ecom' }, () => {
    cy.visit('https://www.amazon.com')
  })

  it('youtube spec 1',{ tags: '@social' }, () => {
    cy.visit('https://www.youtube.com')
  })

  it('medium spec 1',{ tags: '@social' }, () => {
    cy.visit('https://www.medium.com')
  })
})