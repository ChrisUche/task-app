
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

    
      
    //   cy.get('.todos__single').first().trigger('mousedown', { which: 1 });

    //   cy.get('.todos__single').trigger('mousemove');

    //  cy.get('.todos__single').trigger('mouseup', { force: true });

    

 // get the first todo item
 const draggable = cy.get('.todos__single').first();

 // get the droppable container
 const droppable = cy.get('.todos.remove');

 // drag the todo item into completed task
 draggable.trigger('mousedown', { which: 1 });
 draggable.trigger('mousemove');
 droppable.trigger('mouseup', { force: true });

 // check if the item is in completed task
 //cy.get('.todos.remove').contains('buy groceries');


  });
})






