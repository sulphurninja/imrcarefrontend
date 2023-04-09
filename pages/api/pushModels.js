import connectDB from '../../utils/connectDB';
import Model from '../../models/Model';

connectDB();

export default async function handler(req, res) {
    
      try {
        const { modelName, brand, modelImage} = req.body;
        const model = new Model({
        modelName,
        brand,
        modelImage
      });

      await model.save();
        res.status(200).json({ success: true, data: brand });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    }
