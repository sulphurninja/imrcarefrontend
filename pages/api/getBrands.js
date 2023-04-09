import connectDB from '../../utils/connectDB';
import Company from '../../models/Company';

connectDB();


export default async function handler(req, res) {
      try {
        const brands = await Company.find();
        res.status(200).json({ success: true, data: brands });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    }
