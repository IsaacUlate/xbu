describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1010/');
  });

  it('Debería mostrar el título correcto', () => {
    cy.get('h1').should('contain', 'XBuniverse');
  });

  it('Debe navegar a la página Explorar de al hacer clic en el enlace', () => {
    cy.get('a').contains('Explorar').click();
    cy.url().should('include', '/explore');
  });

  it('Debe navegar a la página Inicio de al hacer clic en el enlace', () => {
    cy.get('a').contains('Inicio').click();
    cy.url().should('include', '/');
  });

  it('Debe navegar a la página Publicar de al hacer clic en el enlace', () => {
    cy.get('a').contains('Publicar').click();
    cy.url().should('include', '/new-post');
  });

  it('Debe tener un titulo mas pequeño que diga ¡Explora!', () => {
    cy.get('div').should('contain', '¡Explora!');
  });

  it('Debe tener un mensaje que diga "Comparte tus libros favoritos con la comunidad."', () => {
    cy.get('p').should(
      'contain',
      'Comparte tus libros favoritos con la comunidad.',
    );
  });
});
