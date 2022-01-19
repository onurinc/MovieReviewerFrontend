// MoviePageTests.js created with Cypress
//
it("Going to the home page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
});

it("Going to the movie page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(
    '[src="https://image.tmdb.org/t/p/original//tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg"]'
  ).click();
  /* ==== End Cypress Studio ==== */
});

it("Going to the post comment page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(
    '[src="https://image.tmdb.org/t/p/original//tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg"]'
  ).click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.btn-block').click();
  /* ==== End Cypress Studio ==== */
});

it("Going to the post review page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(
    '[src="https://image.tmdb.org/t/p/original//tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg"]'
  ).click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.float-right').click();
  /* ==== End Cypress Studio ==== */
});

// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
