const PORT = 8080;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const API_key = process.env.OPENAI_API_KEY;


app.post('/generations', async (req, res) => {
    console.log(req.body.prompt , ':req message');
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": req.body.prompt,
            "n": 5,
            "size": "512x512"
        })
    };
    try {
       const response = await fetch('https://api.openai.com/v1/images/generations', options)
       const data = await response.json();
       res.send(data); 
       console.log(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// data?.data.forEach(imageObject => {
//     const ImageContainer = document.createElement('div')
//     ImageContainer.classList.add('image-container');
//     const ImageEle = document.createElement('img');
//     ImageEle.setAttribute('src', imageObject.url);
//     ImageContainer.appendChild(ImageEle);
// })