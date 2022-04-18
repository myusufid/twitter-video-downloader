const express = require('express');
const cors = require('cors');
const { TwitterScraper } = require("@tcortega/twitter-scraper");

const app = express();
app.use(cors())
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});


app.get('/download', (req,res) => {
    var URL = req.query.URL;

    (async () => {
        try {
            const twtScraper = await TwitterScraper.create();
            const tweetMeta = await twtScraper.getTweetMeta(URL);
            res.json(tweetMeta);
        } catch (error) {
            console.log(error);
        }
    })();
});
