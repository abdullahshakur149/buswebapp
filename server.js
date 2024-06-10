const express = require('express');
const app = express();

// middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const servicesRoute = require('./routes/services');
const projectsRoute = require('./routes/projects');
const quoteRoute = require('./routes/quote');




app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/services', servicesRoute);
app.use('/projects', projectsRoute);
app.use('/quote', quoteRoute);



const port = 3000

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})