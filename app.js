const express = require('express');
const exphbs = require('express-handlebars');
const productsJsn = require('./products.json');
 
const app = express();

const PORT = process.env.PORT || 1313;

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs',
    exphbs({
    extname: 'hbs',
    }));

app.get(`/`, function (req, res) {
    res.render(`home`, {
        titleName: `Главная`,
    })
})
    
app.get('/about', function (req, res) {
    res.render(`about`, {
         titleName: `О нас`,
    })
})

app.get('/products', function (req, res) {
    res.render(`products`, {
        productsJsn,
        titleName: `Товары`,
        cssFileName:`products.css`
    })
})
 

app.listen(1313, () => {
    console.log(`app-server runing ${PORT}`)
});