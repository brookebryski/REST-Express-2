const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let hobbies = [

    {
        feeling: 'empowered',
        activity: 'solo travel'
    },
    {
        feeling: 'zen',
        activity: 'yoga'
    },
    {
        feeling: 'strong',
        activity: 'working out'
    },
    {
        feeling: 'present',
        activity: 'meditating'
    }  
]

app.get('/hobbies', (req, res) => {
    res.render('hobbies/index', { hobbies })
})

app.get('/hobbies/new', (req, res) => {
    res.render('hobbies/new')
})

app.post('/hobbies', (req, res) => {
    const { feeling, activity } = req.body;
    hobbies.push({ feeling, activity });
    res.redirect('/hobbies');
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})