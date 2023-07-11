const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("listening on port 3000");
})