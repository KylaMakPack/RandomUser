# RandomUser

This is Version 1 of randomuser. I am learning react and this was my practice, there is another repo that is version 2 where I use components and imporve struture. 

1. Follow these steps to set up react: https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
2. Fetch the data: https://remotestack.io/react-js-get-data-with-fetch-api-and-rest-api-tutorial/#:~:text=The%20fetch%20method%20invokes%20requests,in%20functional%20component%20from%20scratch.
3. Put into a table: https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/
4. There is a warning for unique key I tried to reference stack overflow but it still is giving me the warning, it is a unique key so I am unsure of the warning (https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js) = solution was to put the key into <tr> instead of each individual <td>
5. Format into a table using bootstrap
6. ***Need to add loading because when there are 5000 then it loads sooo slow
7. Separate into functions to then create the details pages: https://www.pluralsight.com/guides/understanding-links-in-reactjs
8. Ran into problems with router in index.js: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
  
Notes/ Thoughts: How to stop it from sending a request to get new information everytime?
How to check the id and output information for just one user
It needs to refresh faster without the user having to click refresh
How to get the document.name of what was clicked and then get all the information for that person: use jqurey to get the tag name that was clicked, have that in a separate function that is returned, then in another js file use the name of the person and use that url with the name of the person to then parse thru all the information you need. https://www.geeksforgeeks.org/how-to-display-the-tag-name-of-the-clicked-element-using-jquery/
Or do a button for each person and that button corresponds to an id or number in order that then grabs the right person
Or have a count and when there is an onchange then save that count number and that is the user
Get 7000 need to fetch 3500 and then again 3500, make 2 requests
Learn the importance of components https://todomvc.com/examples/react/#/
https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/app.jsx
  
I have decided to restart, cannot fetch the request 2 times, dont use components and render well so I made a version 2.
