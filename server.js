const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();

//parse application/json
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routers
var routes = requiret('./routes');
routes(app);


app.listen(3000, () => {
    console.log('server started on port');
});