var express = require("express");
var app=express();
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
var workshops=[
    {name: "Robotics workshop", image: "http://www.robosoftsystems.co.in/img/workshop/school_homepage.gif"},
    {name: "Embeded Workshop", image: "http://turnupworld.com/admin/image/22May2016020530embedx.gif"},
    {name: "entrepreneur workshop", image: "http://4.bp.blogspot.com/-GgW3juzzUfs/UQhqOUOP86I/AAAAAAABA8E/Kxvb9nsz6QU/s1600/Screenshot+2013-01-29+at+6.22.23+PM.png"},
    {name: "Robotics workshop", image: "http://www.robosoftsystems.co.in/img/workshop/school_homepage.gif"},
    {name: "Embeded Workshop", image: "http://turnupworld.com/admin/image/22May2016020530embedx.gif"},
    {name: "entrepreneur workshop", image: "http://4.bp.blogspot.com/-GgW3juzzUfs/UQhqOUOP86I/AAAAAAABA8E/Kxvb9nsz6QU/s1600/Screenshot+2013-01-29+at+6.22.23+PM.png"}      
]

  app.get("/",function(req,res){
      res.render("home");
  })

  app.get("/workshops",function(req,res){
    res.render("workshops",{workshops:workshops});
  })

  app.post("/workshops",function(req,res){
      //get data from forms and add to workshop array
      var name = req.body.name;
      var image=req.body.image;
      var newWorkshop = {name:name, image:image}
      workshops.push(newWorkshop);
     // redirect to Workshops page 
      res.redirect("/workshops");
  })

  app.get("/workshops/new",function(req,res){
      res.render("new");
  })
  
  app.listen(8000,function(){
      console.log("server running on port 8000");

  })