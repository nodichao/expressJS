const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.use((req, res, next) => {
    let date = (new Date()).getDay();
    let hour = (new Date()).getHours();
    if (date === 0 || date === 6 || hour < 9 || hour > 17) {
        res.render('infos');
    } else {
        next(); 
    }
});

app
  .get("/", (req, res) => {
    res.render("home_page");
  })
  .get("/services", (req, res) => {
    res.render("services");
  })
  .get("/contact", (req, res) => {
    res.render("contact_us");
  });

app.listen(3000, () => {
  console.log("server is running");
});
