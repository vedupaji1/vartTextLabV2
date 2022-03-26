 const introCodeForMainEditor = [{
   "key": 1,
   "fileName": "temp.html",
   "current": true,
   "data": `<!DOCTYPE html>
   <html>
   <body>
   
   <h1>The Storage clear() Method</h1>
   
   <p>This example demonstrates how to use the clear() method to delete all the local storage items for this domain.</p>
   
   <h2>Missing localStorage items?</h2>
   
   <p>Since you might not have any items stored in your local storage, we have added a script that creates some for you.</p>
   
   <button onclick="createItems()">Create local storage items</button>
   
   <h2>Remove Items</h2>
   
   <p>Click the button to delete the items:</p>
   
   <button onclick="deleteItems()">Delete items</button>
   
   <h2>Display Items</h2>
   
   <p>Click the button to display all items:</p>
   
   <button onclick="displayItems()">Display items</button>
   
   <p id="demo"></p>
   
   <script>
   function createItems() {
     localStorage.setItem("mytime", Date.now());
     localStorage.setItem("myname", "John");
     localStorage.setItem("myage", 36);
   }
   
   function deleteItems() {
     localStorage.clear();
   }
   
   function displayItems() {
     var l, i;
     document.getElementById("demo").innerHTML = "";
     for (i = 0; i < localStorage.length; i++) {
     x = localStorage.key(i);
     document.getElementById("demo").innerHTML += x + "<br>";
     }
   }
   </script>
   
   </body>
   </html>
   `
   
 }]

 export default introCodeForMainEditor;