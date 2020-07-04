require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./server/models/Post');
const app = express();
const Router = require('./server/routes/routes');

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

 
// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongoDBurl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    console.log('the server is connected with MongoDB')
})

app.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) {
            return res.status(404).send('Not Found');
        } else {
            res.json(posts);

        }
    })

});

app.post('/posts', (req, res) => {
    console.log(req.body)
    const newPost = new Post(
        req.body
    );
    newPost.save().then(post => res.json(post));
    console.log(newPost)
})


//app.use(express.static(path.join(__dirname, './client/build')))
//serve static assets if we are in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use('/', Router)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})