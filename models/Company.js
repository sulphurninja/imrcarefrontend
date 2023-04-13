import mongoose from 'mongoose'

// Delete the existing 'Brand' model from the cache
// mongoose.deleteModel('Company')

const companySchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  Image: {
    type: String,
    required: true
  },
}, { collection: 'brands' });

module.exports = mongoose.model('Company', companySchema);