// describe('on click add to cart adds an item to cart', () => { 
//     it('user can add to cart', () => {
//         //click on store page
//         cy.visit('./pages/Store');
//         // click on add to cart button 
//         // click on + button 
        
//     })
//  });

// describe('The Home Page', () => {
//     it('successfully loads', () => {
//       cy.findByRole('textbox', { name: /Enter a Task/i}).type('nsf'); // change URL to match your dev URL
//     })
//   });

// describe('Button Test', () => {
//   it('Clicks the button and performs the desired action', () => {
//     cy.visit('http://localhost:3000'); // Change URL to match your dev URL
//     cy.get('#my-button').click(); // Click the button with id "my-button"
//     cy.get('#my-result').should('have.text', 'Button clicked!'); // Check if the action was performed correctly
//   })
// })


//This test visits the homepage, finds the input field and submit button using their respective class names, types in a todo item, clicks the submit button, and then verifies that the new todo item is displayed on the page. inputfield.tsx

describe('InputFields component', () => {
  it('allows user to enter and submit a todo item', () => {
    cy.visit('http://localhost:3000'); // assuming InputFields is on the homepage

    // get the input field and submit button
    const input = cy.get('.input__box');
    const submitButton = cy.get('.input__submit');


    // type in a todo item and click the submit button
    input.type('buy groceries');
    submitButton.click();

    // verify that the new todo item is displayed on the page
    cy.contains('buy groceries');

    // test done functionality
    cy.get('.icon#done1').click();
    cy.get('.icon#edit1').click();
    cy.get('.icon#done1').click();


    // test edit functionality
    cy.get('.icon#edit1').click();
    cy.get('.icon#edit1').should('be.visible').type(' Eggs');

     // test delete functionality
     cy.get('.icon#delete1').click();
     cy.get('.todo-item').should('not.exist');

     

      // test edit functionality
      input.type('buy groceries');
      submitButton.click();

    cy.get('.todos__single').first().trigger('mousedown', { which: 1 });

    cy.get('.todos__single').trigger('mousemove');

    cy.get('.todos__single').trigger('mouseup', { force: true });



    




  });
})






