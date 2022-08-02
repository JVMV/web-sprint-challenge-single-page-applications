describe('everything works', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  })

  const nameinput = () => cy.get('input[name=nameinput]');
  const addressInput = () => cy.get('input[name=address]');
  const emailInput = () => cy.get('input[name=email]');
  const styleInput = () => cy.get('select[name=pizzaStyle]');
  const sizeInput = () => cy.get('select[name=pizzaSize]');
  const pepperoni = () => cy.get('input[name=pepperoni]');
  const sausage = () => cy.get('input[name=sausage]');
  const mushrooms = () => cy.get('input[name=mushrooms]');
  const cheese = () => cy.get('input[name=cheese]');
  const cheesyMac = () => cy.get('input[name=cheesyMac]');
  const salad = () => cy.get('input[name=salad]');
  const breadsticks = () => cy.get('input[name=breadsticks]');
  const pasta = () => cy.get('input[name=pasta]');
  const brisk = () => cy.get('input[name=brisk]');
  const horchata = () => cy.get('input[name=horchata]');
  const beer = () => cy.get('input[name=beer]');
  const wine = () => cy.get('input[name=wine]');
  const yerp = () => cy.get('select[name=yerp]');
  const specIns = () => cy.get('input[name=specialInstructions]');
  const submitBtn = () => cy.get('button[id=order-button]');
  const deactBtn = () => cy.get('span[name=deactBtn]');

  it('functional check', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect ({}).not.to.equal({});
    expect({}).to.eql({});
  })

  it('form inputs are available', () => {
    cy.visit('http://localhost:3000/pizza')
    nameinput().should('exist');
    addressInput().should('exist');
    emailInput().should('exist');
    styleInput().should('exist');
    sizeInput().should('exist');
    pepperoni().should('exist');
    sausage().should('exist');
    mushrooms().should('exist');
    cheese().should('exist');
    cheesyMac().should('exist');
    salad().should('exist');
    breadsticks().should('exist');
    pasta().should('exist');
    brisk().should('exist');
    horchata().should('exist');
    beer().should('exist');
    wine().should('exist');
    yerp().should('exist');
    specIns().should('exist');
    submitBtn().should('not.exist');
    deactBtn().should('exist');
  })













})