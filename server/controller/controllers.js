const Post = require('../models/Post');
//destination when multer will store the files

function getAllPostsAPI(req, res) {
    Post.find({}, (err, posts) => {
        if(err) return res.status(404).send('Not Found');
        res.json(posts.reverse());
        console.log('posts are fetching')

    })
}

function getPostAPI(req, res) {
    const id = req.params.id;
    Post.findOne({ _id: id}, (err, post) => {
        if(err) return res.status(404).send('Not Found');
        res.send(post);
    })
}

function addPost(req, res) {
    const newPost = new Post(req.body);
        newPost.save().then(item => res.json(item));
        console.log('new post should be added', newPost)

}

function editPost(req, res) {
    const id = req.params.id;
    const {title, author, category, description, image} = req.body;
    Post.findOne({_id: id}, (err, post) => {
        if(err) return res.status(404).send(err);
        post.title = title
        post.author = author
        post.category = category
        post.description = description
        post.image = image
        post.save(err => {
            if (err) return res.status(404).send(err);
            res.redirect('/')
        })
    })
}

function deletePost(req, res) {
    const id = req.params.id;
    Post.findById(id)
    .then(photo => photo.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false }))
}


module.exports = {
    getAllPostsAPI: getAllPostsAPI,
    getPostAPI: getPostAPI,
    addPost: addPost,
    editPost: editPost,
    deletePost: deletePost
}