
// 

import blogpost from '../models/blogPosts.model';
let fs = require('fs');

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs').get((req, res) => {
    // Use mongoose to get all blog items in the database
    blogpost.find({}).exec((err, blogpost) => {
       if(err)
     {
       console.log('blogs result',err);
        res.send(err);
    }else{
       console.log('blogs result',blogpost);
        res.json(blogpost);
      } 
  });
  });

  router.route('/blogs/:blogId').get((req,res) => {
    // Use mongoose to get particular blog items in the database
      blogpost.findById(req.params.blogId, function(err, blog) {
              if (err)
                 res.send(err);
              else
                 res.json(blog);
      })
  })

  router.route('/blogs/:blog/upvote').put((req,res) => {

    blogpost.findById(req.params.blog, function(err, blog) {
      if (err)
          res.send(err);

      blog.upvotes += 1;  // update the bears info
      // save the bear
      blog.save(function(err) {
          if (err)
              res.send(err);
       
       
          blogpost.findById(req.params.blog, function(err, blog) {
              if (err)
                 res.send(err);
              else
                 res.json(blog);
            })
         
      });
    });
  })

     router.route('/blogs/:blog/downvote') .put((req,res) => {
      blogpost.findById(req.params.blog, function(err, blog) {
        if (err)
            res.send(err);

        blog.downvotes -= 1;  // update the bears info
        // save the bear
        blog.save(function(err) {
            if (err)
                res.send(err);

            // Use mongoose to get all blog items in the database
            blogpost.findById(req.params.blog, function(err, blog) {
              if (err)
                 res.send(err);
              else
                 res.json(blog);
            })
        });

      });

  })
 

  //post data submit
  router.route('/api/blog/new').post((req,res) => {
      blogpost.find({}).exec(req, function(err, blog) {
        if (err)
            res.send(err);

        // save the bear
        blog.save(function(err) {
            if (err)
                res.send(err);
            
             blogpost.find({}).exec((err, blogpost) => {
                if(err)
              {
                  console.log('blogs result',err);
                  res.send(err);
              }else{
                console.log('blogs result',blogpost);
                  res.json(blogpost);
                } 
            });

        });

      });

  })


};
