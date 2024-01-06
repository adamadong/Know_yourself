import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const hostname = '127.0.0.1';
const port = 3000;


app.use("/static", express.static(path.join(__dirname, '/static')))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})

for (let i = 1; i <= 5; i++) {
    app.get(`/core${i}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'static', `core${i}.html`),{sumGroups:JSON.stringify(sumGroups)});
    });
}
app.get('/resultat', (req, res) => {
    const datatransfer = {
        sumGroups: sumGroups,
    };

    const htmlFilePath = path.join(__dirname, 'static', 'resultat.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    const modifiedHtmlContent = htmlContent.replace(
        '<script id="dynamicData"></script>',
        `<script id="dynamicData">const dynamicData = ${JSON.stringify(datatransfer)};</script>`
    );

    res.send(modifiedHtmlContent);
});


let storedRatings = []
let sumGroups = []
app.post('/submitRating', (req, res) => {
    const ratings = req.body.ratings;
  
    if (!ratings || !Array.isArray(ratings)) {
      return res.status(400).json({ success: false, message: 'Invalid ratings data.' });
    }
    const currentRatings = ratings.map(item => parseInt(item.rating, 10));
    storedRatings = storedRatings.concat(currentRatings);
    // 在这里执行您的评分数据处理逻辑，例如保存到数据库
    //console.log(currentRatings)
    console.log('Current storedRatings:', storedRatings);
    console.log('Data type of storedRatings:', typeof storedRatings);
    //if (Array.isArray(storedRatings)) {
        //console.log('Length of storedRatings array:', storedRatings.length);
    //}
    if (storedRatings.length == 40){
        for (let i=0;i<8;i++){
            const sum =storedRatings[i]+storedRatings[i+8]+storedRatings[i+16]+storedRatings[i+24]+storedRatings[[i+32]] ;
            sumGroups.push(sum);
        }
    }
    console.log(sumGroups)
    globalThis.sumGroups = sumGroups;

    const responseData = {
        success: true,
        message: 'Ratings received successfully.',
        ratings: ratings  // 返回评分数据
      };
    
      return res.json(responseData);
  });


app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html><head><title>la quatre cent quatre</title></head><body><img  src=\"https://upload.wikimedia.org/wikipedia/commons/b/b4/Peugeot_404_Champs.jpg\" /></body></html>");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);