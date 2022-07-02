describe("Test User errors", () => {

    it("Should get error when user not found", function () {
      // DO a post request
      cy.request({
        url: "user/InvalidUser",
        method: "GET",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it("Should get error invalid login", function () {
      cy.request({
          method: "GET",
          url: 'user/login',
          qs:{
              "username": "InvalidUser",
              "password": "InvalidPassword"
          },
         }).then((response) => {
        //validate user login
        expect(response.status).to.eq(400);
      });
    });

  });