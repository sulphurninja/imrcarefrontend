const mongoose = require('mongoose');


// mongoose.deleteModel('Model')

const modelSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  modelImage:{
    type: String,
    required: true
  },
}, { collection: 'models' });

module.exports = mongoose.model('Model', modelSchema);
