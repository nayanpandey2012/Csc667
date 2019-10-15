const express = require('express')
const axios = require('axios')
const router = express.Router();

//http://localhost:5000/news?country=US for US
// http://localhost:5000/news?country=CN for china


router.get('/news', async (req, res) => {
    const { country } = req.query;
    const API_KEY = 'f085dfacae2e4fdfb5197fce757a92d1';
    const endPoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

   
    var date = new Date();
    try {
        const news = await axios.get(endPoint);
        res.send({
            status: "OK",
            date: date.toLocaleDateString(),
            params: { country: country }, 
            response: news.data
        });
    } catch (error) {
        res.send({
            status: "Error",
            //error,
            date: date.toLocaleDateString(),
            params: { country: country },
            response: `Country does not exist: ${country}`
        });
    }
});

module.exports = router;