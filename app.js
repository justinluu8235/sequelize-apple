//Creating Models:
//sequelize model:create --name IPhone --attributes productName:string,color:string,capacity:string,price:integer,hasPaymentPlan:integer
//sequelize model:create --name Support --attributes productName:string,topicIssue:string,descriptionOfProblem:string,coveredInWarranty:integer
//sequelize model:create --name JobListing --attributes role:string,department:string,postDate:string,location:string,description:string,favorited:integer 


const { IPhone, Support, JobListing } = require('./models');

//========================================================================
//IPhone

//------------------------
//Create
// IPhone.create({
//     productName: 'iPhone 13 Pro',
//     color: 'Sierra Blue',
//     capacity: '256GB',
//     price: 1099,
//     hasPaymentPlan: 1
// })
//     .then(function (newIPhone) {
//         console.log(newIPhone.toJSON());
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

//------------------------
//bulkCreate
// let bulkCreateArray = [
//     {
//         productName: 'iPhone 13 Pro Max',
//         color: 'Silver',
//         capacity: '1TB',
//         price: 1599,
//         hasPaymentPlan: 1
//     },
//     {
//         productName: 'iPhone 12 Mini',
//         color: 'Blue',
//         capacity: '64GB',
//         price: 599,
//         hasPaymentPlan: 1
//     }
// ]

// IPhone.bulkCreate(bulkCreateArray)
// .then(function(iPhoneArray){
//     for(let i=0; i<iPhoneArray.length; i++){
//         console.log(iPhoneArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findAll

// IPhone.findAll()
// .then(function(iPhoneArray){
//     for(let i=0; i<iPhoneArray.length; i++){
//         console.log(iPhoneArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

// IPhone.findAll({
//     where:{
//         productName:'iPhone 13 Pro'
//     }
// })
// .then(function(iPhoneArray){
//     for(let i=0; i<iPhoneArray.length; i++){
//         console.log(iPhoneArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });


//------------------------
//findOne


// IPhone.findOne({
//     where:{
//         price:1599
//     }
// })
// .then(function(iPhone){
//    console.log(iPhone.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// IPhone.findOne({
//     where:{
//         color:'Sierra Blue'
//     }
// })
// .then(function(iPhone){
//    console.log(iPhone.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// IPhone.findOne({
//     where:{
//         color:'Silver'
//     }
// })
// .then(function(iPhone){
//    console.log(iPhone.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });


//------------------------
//findByPk
// IPhone.findByPk(1)
// .then(function(iPhone){
//    console.log(iPhone.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });



//------------------------
//update
// IPhone.update({
//     color:'Yellow'
// },{
//     where:{
//         color:null
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });


// IPhone.update({
//     color:'Pink'
// },{
//     where:{
//         id:12
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });




//------------------------
//destroy

// IPhone.destroy({
//     where:{id:4}
// })
// .then(function(numRowsDeleted){
//     console.log(numRowsDeleted);
// })
// .catch(function(error){
//     console.log(error);
// });






//========================================================================
//Job Listings 

// JobListing.create({
//     role: 'Tools Software Engineer',
//     department: 'Software and Services',
//     postDate: 'Nov 30,2021',
//     location: 'Santa Clara Valley',
//     description: 'description1',
//     favorited: 0
// })
//     .then(function (newJobListing) {
//         console.log(newJobListing.toJSON());
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// let bulkCreateArray = [
//     {
//     role: 'Screen Technical Services Producer',
//     department: 'Marketing',
//     postDate: 'Nov 30,2021',
//     location: 'Santa Clara Valley',
//     description: 'description1',
//     favorited: 1
//     },
//     {
//     role: 'Senior Art Editor',
//     department: 'Marketing',
//     postDate: 'Nov 16, 2021',
//     location: 'Santa Clara Valley',
//     description: 'description1',
//     favorited: 1
//     }
// ]

// JobListing.bulkCreate(bulkCreateArray)
// .then(function(jobListingArray){
//     for(let i=0; i<jobListingArray.length; i++){
//         console.log(jobListingArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });


//------------------------
//findAll

// JobListing.findAll()
// .then(function(jobListingArray){
//     for(let i=0; i<jobListingArray.length; i++){
//         console.log(jobListingArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

// JobListing.findAll({
//     where:{
//         department:'Software and Services'
//     }
// })
// .then(function(jobListingArray){
//     for(let i=0; i<jobListingArray.length; i++){
//         console.log(jobListingArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findOne


// JobListing.findOne({
//     where:{
//         department:'Software and Services'
//     }
// })
// .then(function(jobListing){
//    console.log(jobListing.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// JobListing.findOne({
//     where:{
//        favorited:0
//     }
// })
// .then(function(jobListing){
//    console.log(jobListing.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// JobListing.findOne({
//     where:{
//         location:'Saint Louis Galleria'
//     }
// })
// .then(function(jobListing){
//    console.log(jobListing.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findByPk


// JobListing.findByPk(5)
// .then(function(jobListing){
//    console.log(jobListing.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });



//------------------------
//update
// JobListing.update({
//     department:'Software and Updated'
// },{
//     where:{
//         department:'Software and Services'
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });


// JobListing.update({
//     role:'Updated Role'
// },{
//     where:{
//         id:8
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });




//------------------------
//destroy

// JobListing.destroy({
//     where:{id:10}
// })
// .then(function(numRowsDeleted){
//     console.log(numRowsDeleted);
// })
// .catch(function(error){
//     console.log(error);
// });



//========================================================================
//Support



// Support.create({
//     productName: 'iPad',
//     topicIssue: 'Apple ID & Cloud',
//     descriptionOfProblem: 'Activation Lock',
//     coveredInWarranty: 0
// })
//     .then(function (newSupport) {
//         console.log(newSupport.toJSON());
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


// let bulkCreateArray = [
//     {
//         productName: 'iPhone',
//         topicIssue: 'Subscriptions & Purchases',
//         descriptionOfProblem: 'Request a refund',
//         coveredInWarranty: 1
//     },
//     {
//         productName: 'iPad',
//         topicIssue: 'Subscriptions & Purchases',
//         descriptionOfProblem: 'Unrecognized charge',
//         coveredInWarranty: 0
//     }
// ]

// Support.bulkCreate(bulkCreateArray)
//     .then(function (supportArray) {
//         for (let i = 0; i < supportArray.length; i++) {
//             console.log(supportArray[i].toJSON());
//         }
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


//------------------------
//findAll

// Support.findAll()
// .then(function(supportArray){
//     for(let i=0; i<supportArray.length; i++){
//         console.log(supportArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

// Support.findAll({
//     where:{
//         productName: 'iPad'
//     }
// })
// .then(function(supportArray){
//     for(let i=0; i<supportArray.length; i++){
//         console.log(supportArray[i].toJSON());
//     }
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findOne


// Support.findOne({
//     where:{
//         productName: 'iPhone'
//     }
// })
// .then(function(support){
//    console.log(support.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// Support.findOne({
//     where:{
//         topicIssue:'Connectivity'
//     }
// })
// .then(function(support){
//    console.log(support.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

// Support.findOne({
//     where:{
//         id:6
//     }
// })
// .then(function(support){
//    console.log(support.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findByPk


// Support.findByPk(8)
// .then(function(support){
//    console.log(support.toJSON());
// })
// .catch(function(error){
//     console.log(error);
// });



//------------------------
//update
// Support.update({
//     topicIssue: 'Subscriptions & Updated'
// },{
//     where:{
//         topicIssue: 'Subscriptions & Purchases'
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });


// Support.update({
//     productName: 'Updated iPhone'
// },{
//     where:{
//         productName: 'iPhone'
//     }
// })
// .then(function(numRowsChanged){
//     console.log(numRowsChanged);
// })
// .catch(function(error){
//     console.log(error);
// });



//------------------------
//destroy

// Support.destroy({
//     where:{id:10}
// })
// .then(function(numRowsDeleted){
//     console.log(numRowsDeleted);
// })
// .catch(function(error){
//     console.log(error);
// });

//------------------------
//findOrCreate

Support.findOrCreate({
    where:{
        productName:'foundOrCreate iPhone'
    },
    defaults:{
    topicIssue: 'Apple ID & Cloud',
    descriptionOfProblem: 'Activation Lock',
    coveredInWarranty: 0
    }
})
.then(function([support]){
    console.log(support.toJSON());
})
.catch(function(error){
    console.log(error);
})