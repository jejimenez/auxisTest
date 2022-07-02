describe("Test Pet CRUD", () => {

  beforeEach(() => {
    // alias the pets fixtures
    cy.fixture('pet.json').as('pets');
  })
    
    it("Should create a pet", function () {
      // DO a post request
      cy.request({
        url: "pet",
        method: "POST",
        body: this.pets[0],
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id");
        //guardar el id del empleado
        const petid = response.body.id;
        cy.wrap(petid).as('petid');
      });
    });
    
    it("Should retrieve the just created pet", function () {
      cy.request("GET", `pet/${this.petid}`).then((response) => {
        //validate that the petid was created
        expect(response.body.name).to.eq(
          this.pets[0].name
        );
      });
    });
    
    it("Should modify the pet", function () {
      cy.request({
        url: `pet`,
        method: "PUT",
        body:     {
          "id": 10,
          "category": {
            "id": 2,
            "name": "Cats Autom Category"
          },
          "name": "Cat Modified",
          "photoUrls": [
            "url1x",
            "url2x"
          ],
          "tags": [
            {
              "id": 10,
              "name": "tag1x"
            },
            {
              "id": 20,
              "name": "tag2x"
            }
          ],
          "status": "sold"
          },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id");
      });
    });


    it("Should retrieve the just modified pet", function () {
      cy.request("GET", `pet/${this.petid}`).then((response) => {
        //validate that the petid was created
        expect(response.body.name).to.eq(
          "Cat Modified"
        );
      });
    });
    
  
    it("Should delete the just created pet", function () {
      cy.request({
        url: `pet/${this.pets[0].id}`,
        method: "DELETE",
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    
  });