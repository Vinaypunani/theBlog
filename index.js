const express = require('express');
const path = require('path');
const blogSchema = require('./modules/blogSchema.js')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req,res)=>{
    var blog = await blogSchema.find() 
    blog = blog.reverse();
    const size = blog.length;
    res.render('index', {blog , size})
})

app.get('/admin',(req,res)=>{
    res.render('admin');
})

app.post('/create', async (req,res)=>{
    var { blogTitle, blogCategory, blogImage, blogData } = req.body
    const create = await blogSchema.create(req.body)
    res.redirect('/');
})

app.listen(port,()=>{
    console.log(`server run on ${ port }`)
})