// Imports 
const express = require('express');
const app = express();
const PORT = 3000;

// Static files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set view
app.set("views", "./views");

// Set view engine
app.set("view engine", "ejs");

// Routes
app.get("/",(req,res)=>{
    res.render("index",{title:"Home"})
})
app.get("/about",(req,res)=>{    
    res.render("about")
})





// Listen on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});