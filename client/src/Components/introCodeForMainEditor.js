 const introCodeForMainEditor = [{
   "key": 1,
   "fileName": "temp.html",
   "current": true,
   "data": `<!DOCTYPE html>
   <html>
     <head>
       <title>VARt TextLab</title>
       <style>
         body{
           margin:0;
           padding:0;
         }
         .tempClass{
           margin:0;
           padding:10px 0px 10px 15px;
         }
       </style>
     </head>
     <body>
       <h1 class="tempClass" onclick="changeColor()">Welcome To <span style="color:red">VARt</span> TextLab</h1>
       <p>Enter Your Text</p>
       <script>
         console.log("Welcome To VARt TextLab");
         const changeColor=()=>
         {
          document.getElementsByClassName("tempClass")[0].style='background-color:black;color:white;';
         }
       </script>
     </body>
   </html>`
 }]

 export default introCodeForMainEditor;