// import connectDB from '../../utils/connectDB';
// import Brand from '../../models/Brand';
// import Model from '../../models/Model';
// import Service from '../../models/Service';

// connectDB();

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     if (req.url === '/api/brands') {
//       try {
//         const brands = await Brand.find();
//         res.status(200).json({ success: true, data: brands });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }

//     if (req.url.startsWith('/api/brands/')) {
//       const brandId = req.url.split('/').pop();

//       try {
//         const models = await Model.find({ brand: brandId });
//         res.status(200).json({ success: true, data: models });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }
//   }

//   if (req.method === 'POST') {
//     const { name, image } = req.body;

//     if (req.url === '/api/brands') {
//       try {
//         const brand = new Brand({ title: name, image });
//         await brand.save();

//         res.status(201).json({ success: true, data: brand });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }

//     if (req.url === '/api/models') {
//       const { brandId, name, image } = req.body;

//       try {
//         const brand = await Brand.findById(brandId);

//         if (!brand) {
//           return res.status(404).json({ success: false, message: 'Brand not found' });
//         }

//         const model = new Model({ brand: brandId, name, image });
//         await model.save();

//         res.status(201).json({ success: true, data: model });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }

//     if (req.url === '/api/services') {
//       const { name, description, model } = req.body;

//       try {
//         const selectedModel = await Model.findById(model);

//         if (!selectedModel) {
//           return res.status(404).json({ success: false, message: 'Model not found' });
//         }

//         const service = new Service({ name, description, model });
//         await service.save();

//         res.status(201).json({ success: true, data: service });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }
//   }
// }