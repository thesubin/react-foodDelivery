const express = require('express');
const router =express.Router();
const mongoose = require("mongoose");
const FoodN = require("../model/food");
const ResturantN= require("../model/resturant")


router.get('/food',(req,res,next)=>{
    FoodN.find()
    .select('name item price')
    .exec()
    .then(docs => {
          res.status(200).json(docs);
     
        })
      
      
      //   if (docs.length >= 0) {
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
   
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }); 


})


router.post('/food',(req,res,next)=>{
   console.log(req.body)
    const food = new FoodN({
         name: req.body.name,
        item: req.body.item,
        price:req.body.price 
    });
    
        food.save() 
        .then(data=>{
        res.status(201).json({
       message: "Created cases successfully",
       createdProduct: {
           name: data.name,
           price:data.price,
           request: {
               type: 'GET',
           }
       }
     });
   })
  
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
        
      });
    });
})

router.get('/resturant',(req,res,next)=>{
  ResturantN.find()
  .select('name quantity id isMostOrdered imgsrc price')
  .exec()
  .then(docs => {
        res.status(200).json(docs);
   
      })
    
    
    //   if (docs.length >= 0) {
    //   } else {
    //       res.status(404).json({
    //           message: 'No entries found'
    //       });
    //   }
 
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }); 


})


router.post('/resturant',(req,res,next)=>{
 console.log(req.body)
  const resturant = new ResturantN({
       name: req.body.name,
       imgsrc:req.body.imgsrc,
      id:req.body.id,
      price:req.body.price,
     quantity:req.body.quantity,
    isMostOrdered:req.body.isMostOrdered 
  });
  
    ResturantN
  .find({name:req.body.name})
  .exec()
  .then(result => {
    console.log(result)
    if(result.length>0){
      return res.status(404).json({
        message:"Resturant already exists"
      });
   }
      resturant.save() 
      .then(data=>{
      res.status(201).json({
     message: "Created cases successfully",
     createdProduct: {
         name: data.name,
         price:data.price,
         request: {
             type: 'GET',
         }
     }
   });
 });
   
    })

  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
})



// router.patch("/cases/:districtid", (req, res, next) => {
//   const id = req.params.districtid;
//   // const updateOps = {};
//   // for (const ops of req.body) {
//   //   updateOps[ops.propName] = ops.value;
//   // }
//   Cases.update({ district: id }, { $set: {count:req.body.count} })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'District updated',
//           request: {
//               type: 'GET',
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.patch("/recovered/:districtid", (req, res, next) => {
//   const id = req.params.districtid;
//   // const updateOps = {};
//   // for (const ops of req.body) {
//   //   updateOps[ops.propName] = ops.value;
//   // }
//   Recovered.update({ district: id }, { $set: {count:req.body.count} })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'District updated',
//           request: {
//               type: 'GET',
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


// router.delete("/cases/:districtid", (req, res, next) => {
//   Cases.remove({ district: req.params.districtid })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: "Entry deleted",
//         request: {
//           type: "POST",
//         }
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.delete("/recovered/:districtid", (req, res, next) => {
//   Recovered.remove({ district: req.params.districtid })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: "Entry deleted",
//         request: {
//           type: "POST",
//         }
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// });

module.exports=router;
