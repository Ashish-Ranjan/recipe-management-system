var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var neDB = require('nedb');

var userdb = new neDB({ filename: 'user.db', autoload: true });
var recipedb = new neDB({ filename: 'recipe.db', autoload: true });


app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/recipes/:from/:limit', function (req, res) {
    response = req.params;
    recipedb.find({}).sort({}).skip(response.from).limit(response.limit).exec(function (err, docs) {
        docs = { "data": docs };
        if (docs) {
            res.end(JSON.stringify(docs));
        } else {
            res.end(JSON.stringify(err));
        }
    });
})

app.post('/recipes/create', urlencodedParser, function (req, res) {
    response = req.body;
    recipedb.insert(response, function (err, doc) {
        if (doc) {
            res.end(JSON.stringify(doc));
        } else {
            res.end(JSON.stringify(err));
        }
    });
})

app.post('/recipes/update', urlencodedParser, function (req, res) {
    response = req.body;
    recipedb.update({ _id: response._id }, {
        $set: {
            "name": response.name,
            "cookingInstruction": response.cookingInstruction,
            "description": response.description,
            "imagePath": response.imagePath,
            "recipeType": response.recipeType,
            "maxPersonSuitableFor": response.maxPersonSuitableFor,
            "ingredients": response.ingredients
        }
    }, {}, function (err, doc) {
        if (doc) {
            res.end(JSON.stringify(doc));
        } else {
            res.end(JSON.stringify(err));
        }
    });
})

app.post('/recipes/delete', urlencodedParser, function (req, res) {
    response = req.body;
    recipedb.remove({ _id: response._id }, {}, function (err, doc) {
        if (doc) {
            res.end(JSON.stringify(doc));
        } else {
            res.end(JSON.stringify(err));
        }
    });
})

app.post('/register', urlencodedParser, function (req, res) {
    response = req.body;
    userdb.find({ username: response.username }, function (err, docs) {
        if (docs.length) {
            res.end(JSON.stringify({ errorMessage: "User Already Exists" }));
        }
        else {
            userdb.insert(response, function (err, doc) {
                if (doc) {
                    res.end(JSON.stringify(doc));
                } else {
                    res.end(JSON.stringify(err));
                }
            });
        }
    });

})


app.post('/login', urlencodedParser, function (req, res) {
    response = req.body;
    console.log(response);
    userdb.find({ username: response.userName }, function (err, docs) {
        if (docs.length)
         {
            if (docs[0].password == response.password) {
                res.end(JSON.stringify(docs[0]));
            } else {
                res.end(JSON.stringify({ errorMessage: "Invalid Attempt" }));
            }
        } else {
            res.end(JSON.stringify({ errorMessage: "Invalid Credentials" }));
        }
    });

})

app.get('/recipes', function (req, res) {
    recipedb.find({}, function (err, doc) {
        if (doc) {
            res.end(JSON.stringify(doc));
        } else {
            res.end(JSON.stringify(err));
        }
    });
})


var server = app.listen(3000, function () {
    var host = '127.0.0.1'
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  