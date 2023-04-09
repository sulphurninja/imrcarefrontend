import connectDB from '../../utils/connectDB';
import Model from '../../models/Model';

connectDB();

export default async function handler(req, res) {
  try {
    const brandId = req.query.brand;
    let models;

    if (brandId) {
      models = await Model.find({ brand: brandId });
    } else {
      models = await Model.find();
    }

    res.status(200).json({ success: true, data: models });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
