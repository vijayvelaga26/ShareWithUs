var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/share_app", { useMongoClient: true })
//schema setup 
var workshopSchema = new mongoose.Schema({
    name: String,
    image: String,
    host: String,
    mobile: Number,
    description: String
})

var Workshop = mongoose.model("Workshop", workshopSchema);
app.get("/", function (req, res) {
    res.render("home");
})

app.get("/workshops", function (req, res) {
    Workshop.find({}, function (err, allWorkshops) {
        if (err) { console.log(error) }
        else {
            res.render("index", { workshops: allWorkshops });
        }
    })
})
app.post("/workshops", function (req, res) {
    //get data from forms and add to workshop array
    var name = req.body.name;
    var image = req.body.image;
    var mobile = req.body.mobile;
    var host = req.body.host;
    var description = req.body.description
    var newWorkshop = { name: name, image: image, host: host, mobile: mobile, description: description }
    Workshop.create(newWorkshop, function (err, data) {
        if (err) { console.log(error) }
        else {
            console.log("newly added workshop :" + data)
            res.redirect("/workshops");
        }
    });
})

app.get("/workshops/new", function (req, res) {
    res.render("new");
})

app.get("/workshops/:id", function (req, res) {
    Workshop.findById(req.params.id, function (err, workshopinfo) {
        if (err) { console.log(err) }
        else {
            res.render("show", { workshop: workshopinfo });
        }
    })

})

app.listen(8000, function () {
    console.log("server running on port 8000");
})

