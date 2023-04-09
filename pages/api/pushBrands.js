import connectDB from '../../utils/connectDB';
import Company from '../../models/Company';

connectDB();

export default async function handler(req, res) {
    
      try {
        const { title, Image} = req.body;
        const brand = new Company({
        title,
        Image,
      });

      await brand.save();
        res.status(200).json({ success: true, data: brand });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    }
