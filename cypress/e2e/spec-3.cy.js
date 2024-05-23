describe('template spec 3', () => {
  it('cypress spec 3',{ tags: '@web' }, () => {
    cy.visit('https://www.cypress.io')
  })

  it('google spec 3',{ tags: '@web' }, () => {
    cy.visit('https://www.google.com')
  })

  it('amazon spec 3',{ tags: '@ecom' }, () => {
    cy.visit('https://www.amazon.com')
  })

  it('youtube spec 3',{ tags: '@social' }, () => {
    cy.visit('https://www.youtube.com')
  })

  it('medium spec 3',{ tags: '@social' }, () => {
    cy.visit('https://www.medium.com')
  })
})