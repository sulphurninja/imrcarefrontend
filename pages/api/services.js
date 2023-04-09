import connectDB from '../../utils/connectDB';
import Service from '../../models/Service';

connectDB();

export default async function handler(req, res) {
    
      try {
        const { serviceName, description, model} = req.body;
        const service = new Service({
        serviceName,
        description,
        model
      });

      await service.save();
        res.status(200).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    }
