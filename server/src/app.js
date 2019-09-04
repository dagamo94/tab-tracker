const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email}. Your user was resgistered!`
    })
});

app.listen(PORT, () => {
    console.log(`Server is now running on port: ${PORT}`);
});
