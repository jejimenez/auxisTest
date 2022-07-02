describe("Test Users", () => {

    beforeEach(() => {
      // alias the pets fixtures
      cy.fixture('user.json').as('users');
    })
      
      it("Should create a list of users", function () {
        // DO a post request
        cy.request({
          url: "user/createWithList",
          method: "POST",
          body: this.users,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body[0]).to.have.property("id");
        });
      });

      it("Should login with the just created user", function () {
        cy.request({
            method: "GET",
            url: 'user/login',
            qs:{
                "username": this.users[0].username,
                "password": this.users[0].password
            },
           }).then((response) => {
          //validate user login
          expect(response.status).to.eq(200);
          expect(response).property('body').to.contain('Logged in user session:');
        });
      });

      it("Should logout", function () {
        cy.request("GET", `user/logout`).then((response) => {
          //validate that the logout answer
          expect(response.status).to.eq(200);
          expect(response).property('body').to.contain('User logged out');
        });
      });

      it("Should get a user", function () {
        cy.request({
            method: "GET",
            url: `user/${this.users[0].username}`
           }).then((response) => {
          //validate that the user
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(this.users[0].id);
          expect(response.body.username).to.eq(this.users[0].username);
          expect(response.body.email).to.eq(this.users[0].email);
        });
      });

      it("Should delete a user", function () {
        cy.request({
          url: `user/${this.users[0].username}`,
          // Delete the user
          method: "DELETE",
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  });