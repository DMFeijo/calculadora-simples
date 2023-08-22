describe('operações matemáticas', () => {
  beforeEach(() => {


    cy.visit('https://calculadora-digital.com.br/');
    cy.get('#calc1').should('be.visible')


  });


  it('Operação de Soma', () => {
    cy.get(':nth-child(4) > :nth-child(2) > .calc_btn').click()
    cy.get(':nth-child(2) > :nth-child(4) > .calc_btn').click()
    cy.get(':nth-child(5) > :nth-child(3) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(4) > .calc_btn').click()
    cy.wait(1000); // Aguarde 1 segundo
    cy.get('#calc1_resultat').should('have.value', '8')


  });
  it('Operação de Subtração', () => {
    cy.get(':nth-child(5) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(3) > :nth-child(4) > .calc_btn').click()
    cy.get(':nth-child(4) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(4) > .calc_btn').click()
    cy.get('#calc1_resultat').should('have.value', '6')


  });
  it('Operação de Multiplicação', () => {
    cy.get(':nth-child(5) > :nth-child(3) > .calc_btn').click()
    cy.get(':nth-child(4) > :nth-child(4) > .calc_btn').click()
    cy.get(':nth-child(4) > :nth-child(2) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(4) > .calc_btn').click()
    cy.get('#calc1_resultat').should('have.value', '15')


  });
  it('Operação de Divisão', () => {
    cy.get(':nth-child(5) > :nth-child(2) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(5) > :nth-child(4) > .calc_btn').click()
    cy.get(':nth-child(4) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(4) > .calc_btn').click()
    cy.get('#calc1_resultat').should('have.value', '5')
   
  });
  it('Divisão por Zero', () => {
    cy.get(':nth-child(5) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(5) > :nth-child(4) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .calc_btn').click()
    cy.get(':nth-child(6) > :nth-child(4) > .calc_btn').click()
    cy.get('#calc1_resultat').should('have.value', 'Infinity')

  });
});
