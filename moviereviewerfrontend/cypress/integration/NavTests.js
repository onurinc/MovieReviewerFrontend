it("clicking home page nav bar", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.me-auto > [href="/"]').click();
  /* ==== End Cypress Studio ==== */
});

it("clicking actor page nav bar", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="/actors"]').click();
  /* ==== End Cypress Studio ==== */
});

it("clicking login page nav bar", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="/login"]').click();
  /* ==== End Cypress Studio ==== */
});

it("clicking register page nav bar", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="/register"]').click();
  /* ==== End Cypress Studio ==== */
});
