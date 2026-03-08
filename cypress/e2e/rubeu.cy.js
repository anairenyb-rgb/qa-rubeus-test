describe('Página Qualidade Rubeus', () => {
  const baseUrl = 'https://qualidade.apprbs.com.br/site'
  const whatsappUrl = 'https://web.whatsapp.com/'
  const eventosUrl = 'https://cursos.rubeus.com.br/analista-rubeus/'

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit(baseUrl)
  })

  it('Deve validar links externos', () => {
    cy.contains('a', 'Atendimento')
      .should('have.attr', 'href', whatsappUrl)
      .and('have.attr', 'target', '_blank')

    cy.contains('a', 'EVENTOS')
      .should('have.attr', 'href', eventosUrl)
      .and('have.attr', 'target', '_blank')
  })

  it('Deve exibir seção de "Próximos Eventos', () => {
    cy.contains('PRÓXIMOS EVENTOS')
      .should('be.visible')

    cy.contains('Graduação')
      .closest('.gjs-cell')
      .find('a')
      .should('have.attr', 'href', eventosUrl)
      .and('have.attr', 'target', '_blank')
  })

  it('Botão "Concluir" deve iniciar desabilitado', () => {
    cy.get('#rbBtnNext')
      .should('be.disabled')
  })

  it('Deve habilitar botão após preencher formulário', () => {
    cy.get('[name="pessoa.nome"]')
      .should('be.visible')
      .type('Teste QA')

    cy.get('[name="pessoa.emailPrincipal"]')
      .should('be.visible')
      .type('teste@teste.com.br')

    cy.get('[name="pessoa.telefonePrincipal"]')
      .should('be.visible')
      .type('99 99999-9999')

    cy.get('#rbBtnNext')
      .should('not.be.disabled')
      .click()

  })


})