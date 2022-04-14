const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})



const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user:bcitcomp1537@cluster0.gtlxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect("mongodb+srv://nabil828:comp1537@cluster0.lbm8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true });

const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});
const unicornModel = mongoose.model("unicorns", unicornSchema);



app.post("https://pacific-chamber-40829.herokuapp.com/allUnicorns", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.allUnicorns)

    unicornModel.find({}, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });


})

app.use(express.static("./public"))