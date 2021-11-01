const express  = require('express');
const path = require('path');
let app = express();



app.use(express.static(path.join(__dirname, '../public')));

app.use('/order/:id', (req, res) => {
    let id = req.params.id;
    res.send
})

app.listen(3000);