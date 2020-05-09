
// 
import projectwork from '../models/projectWork.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/projectlist')
    
     .get((req, res) => {

      // Use mongoose to get all blog items in the database
      projectwork.find((err, projectlist) => {
        console.log('result'+ projectlist);
        if(err)
          res.send(err);
        else
          res.json(projectlist);
      });
    });

     router.route('/projectlist/:title')
    
     .get((req, res) => {

      // Use mongoose to get all blog items in the database
       projectwork.find({link:req.params.title}, function(err, response) {
              if (err)
                 res.send(err);
              else
                 res.json(response);
      })
      
    });

};
