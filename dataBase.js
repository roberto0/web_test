const { mongoose } = require("mongoose");
 
mongoose.connect('mongodb://localhost/data', {
   // useCreateIndex: true,
   // useNewUrlParser: true,
   // useFindAndModify: false
}).then(db => console.log('DB is connected')).catch(err => console.log(err));

//module.exports.MongoClient = MongoClient;