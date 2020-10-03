//function connectDatabase() {
    /*const MongoClient = require('mongodb').MongoClient;*/
  //  const uri = "mongodb+srv://nguyentuanan_corbin:NYJ32b32mcwLf0uL@cluster0.cylyp.gcp.mongodb.net/RecuirementManagement?retryWrites=true&w=majority";
    //const client = new MongoClient(uri, { useNewUrlParser: true });
   /* client.connect(err => {
        //const collection = client.db("test").collection("devices");
        console.log("Kết nối database lỗi")
        console.log(err);
        // perform actions on the collection object
        client.close();
    });*/

   /* MongoClient.connect(uri, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Đã thiết lập kết nối đến', uri);

            // do some work here with the database.

            //Close connection
            db.close();
        }
    })*/


//}
module.exports = {
    uri: 'mongodb+srv://nguyentuanan_corbin:NYJ32b32mcwLf0uL@cluster0.cylyp.gcp.mongodb.net/RecuirementManagement?retryWrites=true&w=majority'
};


