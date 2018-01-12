var express = require("express");
var app=express();
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

  app.get("/",function(req,res){
      res.render("home");
  })

  app.get("/workshops",function(req,res){

    var workshops=[
        {name: "Robotics workshop", image: "http://www.robosoftsystems.co.in/img/workshop/school_homepage.gif"},
        {name: "Embeded Workshop", image: "http://turnupworld.com/admin/image/22May2016020530embedx.gif"},
        {name: "entrepreneur workshop", image: "http://4.bp.blogspot.com/-GgW3juzzUfs/UQhqOUOP86I/AAAAAAABA8E/Kxvb9nsz6QU/s1600/Screenshot+2013-01-29+at+6.22.23+PM.png"},
        {name: "Robotics workshop", image: "http://www.robosoftsystems.co.in/img/workshop/school_homepage.gif"},
        {name: "Embeded Workshop", image: "http://turnupworld.com/admin/image/22May2016020530embedx.gif"},
        {name: "entrepreneur workshop", image: "http://4.bp.blogspot.com/-GgW3juzzUfs/UQhqOUOP86I/AAAAAAABA8E/Kxvb9nsz6QU/s1600/Screenshot+2013-01-29+at+6.22.23+PM.png"},
        {name: "Robotics workshop", image: "http://www.robosoftsystems.co.in/img/workshop/school_homepage.gif"},
        {name: "Embeded Workshop", image: "http://turnupworld.com/admin/image/22May2016020530embedx.gif"},
        {name: "entrepreneur workshop", image: "http://4.bp.blogspot.com/-GgW3juzzUfs/UQhqOUOP86I/AAAAAAABA8E/Kxvb9nsz6QU/s1600/Screenshot+2013-01-29+at+6.22.23+PM.png"}      
    ]
      res.render("workshops",{workshops:workshops});
  })
  
  app.listen(8000,function(){
      console.log("server running on port 8000");

  })