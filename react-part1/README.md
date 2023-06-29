#React

1. create-react-app
Create a React app using create-react-app . Remove everything inside the <div className="App"> and add a <h1> element with a text "Hello World!" inside it.

Optional: If you want to test the project locally, you can download the zip file that can be found from this page. Make a directory called __test__ inside the src folder (notice the two underlines before and after test). Then, copy the files that are in the zip file into that folder. To run all the tests, run npm run test.
If you want to run only certain tests, for example only tasks 1, you can run npm run test task1

zip: tests_exercise9.zip. Note that the values in tests are different in CodeGrade! 

2. Creating and using own components
In this assignment you will create two React components: MyContainer.js and MyList.js. Inside the src folder, create another folder called components. Inside this folder, create two files: MyContainer.js and MyList.js.  App.js component should have MyContainer.js component inside it, and MyContainer.js should have MyList.js inside it. W3School has good examples for creating and using react components.

3. Props, lists and keys
MyList.js should take two props: header and items. Header is just a string that should be displayed in the component. items -prop has the following structure:

[ { id:String, text:String } ]

In other words, the items -prop is a list of objects, and every object has two string variables: id and text. Each object in the list should be shown as an <li>-element inside ordered list (<ol>), and the content of the text variable should be shown. id should be used as a key to help React identify which items has changed. Calling should produce DOM tree similar to this (except that the ::marker is unnecessary):

4. Component states
Modify the last task so that the items- prop is in state inside MyContainer-component, and give that as a prop for the MyList-component. Add a <textarea> and <button> into the MyContainer-component. By pressing the button, it should create a new object and append it to the items state. Documentation for useState can be found from here.

5. Conditional rendering
When one of the <li>'s is pressed, it should get styled to having text-decoration: "line-through". Note that you can also give functions as props.

Tip: One way to do this task is to give the items-state a new attribute, for example "clicked", that can be set false or true. Then, if the "clicked" is true, then the <li> should have text-decoration: "line-through".And then, you can use the function in MyList-component