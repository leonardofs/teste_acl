//var PacketHistory = require ('../../Schemas/PacketSchema');
const path = require('path')
const mongoose = require ('mongoose');
const fs = require('fs');



module.exports= function jsonToMongo(){
    
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'packets_history.json'));

    let jsonData = JSON.parse(rawdata);

    const schema = mongoose.Schema(
        {
        'packetHistory' : [{ type: mongoose.Schema.Types.Mixed}]
        }
    );
  
    var  jsonModel = new mongoose.model( Date.now()+'packets', schema ,'packets_histories');
    var data = jsonModel(jsonData)


     data.save(function (err) {
         if (err) {
            console.log('deu erro');
            console.log(err)
            return handleError(err);
        }else{
                console.log('salvou')
        }
  
    });


}