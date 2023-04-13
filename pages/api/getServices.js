import connectDB from '../../utils/connectDB';
import Service from '../../models/Service';

connectDB();

export default async function handler(req, res) {
  try {
    const modelId = req.query.model;
    let services;

    if (modelId) {
      services = await Service.find({ model: modelId }).populate('model');
    } else {
      services = await Service.find().populate('model');
    }

    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
