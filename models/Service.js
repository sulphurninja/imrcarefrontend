const mongoose = require('mongoose');


// mongoose.deleteModel('Service')

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
    required: true
  }
}, { collection: 'services' });

module.exports = mongoose.model('Service', serviceSchema);
