const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let hobbies = [

    {
        id: uuid(),
        feeling: 'empowered',
        activity: 'solo travel'
    },
    {
        id: uuid(),
        feeling: 'zen',
        activity: 'yoga'
    },
    {
        id: uuid(),
        feeling: 'strong',
        activity: 'working out'
    },
    {
        id: uuid(),
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
    hobbies.push({ feeling, activity, id: uuid() });
    res.redirect('/hobbies');
})

app.get('/hobbies/:id', (req, res) => {
    const { id } = req.params;
    const foundHobby = hobbies.find(h => h.id === id);
    res.render('hobbies/show', { foundHobby });
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})