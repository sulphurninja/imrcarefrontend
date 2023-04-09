import { useState, useEffect } from 'react';
import axios from 'axios';
import AddService from './AddService';

const AdminPanel = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [models, setModels] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [brandImage, setBrandImage] = useState('');
  const [modelImage, setModelImage] = useState('');
  const [modelName, setModelName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // new state variable

  useEffect(() => {
    // Fetch all brands on page load
    axios.get('/api/getBrands').then((res) => {
      setBrands(res.data.data);
      // console.log(brands);
    });
  }, []);

  useEffect(() => {
    // Fetch all brands on page load
    axios.get('/api/getBrands').then((res) => {
      setModels(res.data.data);
      // console.log(models);
    });
  }, []);



  const handleBrandChange = (event) => {
    // Fetch models for selected brand
    const brandId = event.target.value;
    setSelectedBrand(brandId);
  };

  const handleBrandSubmit = (event) => {
    event.preventDefault();

    // Make API request to add new brand
    axios.post('/api/pushBrands', {
      title: brandName,
      Image: brandImage,
    }).then((res) => {
      // Add new brand to state.then(() => {
      setIsSubmitted(true);
    });
  };

  const handleModelSubmit = (event) => {
    event.preventDefault();

    // Make API request to add new brand
    axios.post('/api/pushModels', {
      modelName: modelName,
      brand: selectedBrand,
      modelImage: modelImage,
    }).then((res) => {
      // Add new brand to state
      setModels([...models, res.data.data]);
      // Reset form fields
      setModelName('');
      setModelImage('');
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'x8yy4v2u');
    axios.post('https://api.cloudinary.com/v1_1/kaam-24x7/image/upload', formData)
      .then((response) => {
        setBrandImage(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className='mx-8 w-[70%] ml-[15%]'>
      
      {isSubmitted ? (
        <p className="text-green-500  lg:text-3xl font-bold mt-4">Brand added successfully!</p>
      ) : (
<div className='border-2 border-white mt-4'>
<h2 className='block text-3xl    text-green-200 font-serif mb-4 text-center'>Add a new brand</h2>
        <form  onSubmit={handleBrandSubmit}>
          <label className='block text-white mt-4 font-serif pl-4 font-bold mb-2'>
            Brand name:
            <input type="text" className='appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={brandName} onChange={(event) => setBrandName(event.target.value)} />
          </label>
          <label className='block text-white font-serif pl-4 font-bold mt-8'>
            Image:
            <input type="file" className='pl-4' onChange={handleImageUpload} />
          </label>
          <button type="submit" className='bg-green-700 ml-4 mb-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8'>Add brand</button>
        </form>
</div>
      )}
      <h2 className='block text-3xl font-mono text-blue-200 font-bold mt-8 mb-4'>Add a new Model</h2>
      <form onSubmit={handleModelSubmit}>
        <label className='block text-white -700 font-bold mt-8'>
          Select Mobile Brand:
          <select className='text-black w-full py-2 mb-4 px-3 border rounded appearance-none' value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.title}
              </option>
            ))}
          </select>
        </label>
        <label className='block text-white -700 font-bold mb-2'>
          Model name:
          <input type="text" className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={modelName} onChange={(event) => setModelName(event.target.value)} />
        </label>

        <label className='block text-white -700 font-bold mb-2'>
          Model image URL:
          <input type="text" className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={modelImage} onChange={(event) => setModelImage(event.target.value)} />
        </label>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add Model</button>
      </form>

      <AddService />
    </div>
  );
};

export default AdminPanel;
