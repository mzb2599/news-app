describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    // Page title check 
    cy.get("h1").should("contain", "Most Viewed Articles");

    // Check if the mui CircularProgress spinner is displayed
    cy.get("[data-testid='loading-spinner']").should("exist");

    // Check if the loading spinner is removed after data is loaded
    cy.get("[data-testid='loading-spinner']").should("not.exist");

    // Check if the articles are displayed
    cy.get("div[class='news-articles']").should("exist");

    // Check if the articles list is not empty
    cy.get("div[class='news-articles']").children().should("have.length.greaterThan", 0);

    // Check if the first article image is displayed correctly
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').should("exist");

    // Check if the first article title is displayed correctly
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > [data-testid="article-title"]').should("exist");

    // Check if the first article abstract is displayed correctly
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').should("exist");
      });
});
