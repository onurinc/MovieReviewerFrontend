it("Going to the actor page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="/actors"]').click();
  /* ==== End Cypress Studio ==== */
});

it("  ", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/actors");
  /* ==== Generated with Cypress Studio ==== */
  cy.get(":nth-child(2) > ul > :nth-child(1) > a").click();
  /* ==== End Cypress Studio ==== */
});

it("Clicking on actors movie 2", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/actors");
  /* ==== Generated with Cypress Studio ==== */
  cy.get(":nth-child(2) > ul > :nth-child(2) > a").click();
  /* ==== End Cypress Studio ==== */
});

it("Clicking on actors movie 2", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/actors");
  /* ==== Generated with Cypress Studio ==== */
  cy.get(":nth-child(2) > ul > :nth-child(3) > a").click();
  /* ==== End Cypress Studio ==== */
});
