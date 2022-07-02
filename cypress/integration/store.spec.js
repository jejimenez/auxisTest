describe("Test Orders and Inventory", () => {

    beforeEach(() => {
      // alias the orders fixtures
      cy.fixture('order.json').as('orders');
    })
      
      
    it("Should get the inventory", function () {
        cy.request("GET", 'store/inventory').then((response) => {
          //validate the inventory 
          expect(response.body).to.have.property("approved");
          expect(response.body).to.have.property("placed");
          expect(response.body).to.have.property("delivered");
          let approved = response.body.approved;
          cy.wrap(approved).as('approved');
        });
      });

      it("Should create an order", function () {
        // DO a post request
        cy.request({
          url: "store/order",
          method: "POST",
          body: this.orders[0],
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("id");
          //stores the order id
          const orderid = response.body.id;
          cy.wrap(orderid).as('orderid');
        });
      });
      
      it("Should retrieve the just created order", function () {
        cy.request("GET", `store/order/${this.orderid}`).then((response) => {
          //validate that the orderid was created
          expect(response.body.shipDate).to.eq(
            this.orders[0].shipDate
          );
        });
      });

    it("Should get the inventory additioned", function () {
        cy.request("GET", 'store/inventory').then((response) => {
          //validate the inventory 
          expect(response.body).to.have.property("approved");
          expect(response.body).to.have.property("placed");
          expect(response.body).to.have.property("delivered");
          cy.log(response.body.approved);
          expect(response.body.approved).to.eq(
            this.approved + this.orders[0].quantity
          );

        });
      });

      it("Should delete the just created order", function () {
        cy.request({
          url: `store/order/${this.orderid}`,
          method: "DELETE",
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });


    it("Should get the inventory subtracted", function () {
        cy.request("GET", 'store/inventory').then((response) => {
          //validate the inventory 
          expect(response.body).to.have.property("approved");
          expect(response.body).to.have.property("placed");
          expect(response.body).to.have.property("delivered");
          cy.log(response.body.approved);
          expect(response.body.approved).to.eq(
            this.approved
          );

        });
      });

});