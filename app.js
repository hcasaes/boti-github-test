const express = require('express');
const app = express();
const port = 5000;

// view engine ejs
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

    // params search
    const langs = ["php", "python", "javascript", "go", "dotnet"];
    const order = "desc";
    const sort = "stars";

    let array_langs = [];

    langs.map(async (lang) => {
        let response =  await fetch(`https://api.github.com/search/topics?q=${lang}&o=desc&s=stars`)
        let data = await response.json()
        array_langs.push(data)

    })

    // navegador http://localhost:5000/
    // terminal npm start

app.get('/', async function (req, res) {
    res.json(array_langs)
});

app.get('/home', (req , res) => {
    res.render('home', {
        array_langs
    })
})
    


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 