describe("Test Store errors", () => {
    
  it("Should get error when order not found - GET", function () {
    // DO a post request
    cy.request({
      url: "store/order/999999",
      method: "GET",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Should get error when order not found - DELETE", function () {
      // DO a post request
      cy.request({
      url: `store/order/99999`,
      method: "DELETE",
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });


  });