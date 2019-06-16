const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors')


const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect("mongodb://oldbutgold:pimenta19@ds137827.mlab.com:37827/oldbutgold",{
    useNewUrlParser: true
});

app.use((req, res, next) => { //intercepta a requisicao e passa o socket como param
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
    console.log(":) Server started on port 3000");
});