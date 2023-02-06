const express = require('express');
const app = express();
const port = 5000;

    // params search
    const langs = ["java", "python", "javascript", "css", "dotnet"];
    const order = "desc";
    const sort = "stars";

    let array_langs = [];

    langs.map(async (lang) => {
        let response =  await fetch(`https://api.github.com/search/repositories?q=${lang}&sort=${sort}&order=${order}&page=1&per_page=1`)
        let data = await response.json()
        array_langs.push(data)

    })


app.get('/', async function (req, res) {


    res.json(array_langs)

    // response = await response.json();
    // res.status(200).json(response);
    // res.json(response)

});
    


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 