
const mongoose = require('mongoose');



class PacketsController {
  async index(req, res) {
    const schema = mongoose.Schema(
      {
      'packetHistory' : [{ type: mongoose.Schema.Types.Mixed}]
    });

    var  jsonModel = new mongoose.model('packets', schema ,'packets_histories');

    try {
      var result = await jsonModel.findOne();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  

  async update(req, res) {
    //TODO: implementar update 
  }
}

module.exports = new PacketsController();