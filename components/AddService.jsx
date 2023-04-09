import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddService = () => {
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
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
        axios.get(`/api/getModels?brand=${selectedBrand}`).then((res) => {
            setModels(res.data.data);
            // console.log(models);
        });
    }, [selectedBrand]);

    const handleModelChange = (event) => {
        // Set selected model
        setSelectedModel(event.target.value);
    };

    const handleBrandChange = (event) => {
        // Fetch models for selected brand
        const brandId = event.target.value;
        setSelectedBrand(brandId);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make API request to add new service
        axios.post('/api/services', {
            serviceName: name,
            description: description,
            model: selectedModel,
        })
            .then(() => {
                setIsSubmitted(true);
            });
    };

    return (
        <div>
            <h2 className='block text-3xl font-mono text-white -700 font-bold mt-12'>Add Service</h2>
            {isSubmitted ? (
                <p className="text-green-500  lg:text-3xl font-bold mt-4">Service added successfully!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label className='block text-white -700 font-bold mt-8'>
                        Brand:
                        <select className='text-black w-full py-2 px-3 border rounded appearance-none' value={selectedBrand} onChange={handleBrandChange}>
                            <option value="">Select a brand</option>
                            {brands.map((brand) => (
                                <option key={brand._id} value={brand._id}>
                                    {brand.title}
                                </option>
                            ))}
                        </select>
                    </label>

                    {selectedBrand && (
                        <label className='block text-white -700 font-bold mt-8  '>
                            Model:
                            <select className='text-black w-full py-2 px-3 border rounded appearance-none' value={selectedModel} onChange={handleModelChange}>
                                <option value="">Select a model</option>
                                {models.map((model) => (
                                    <option key={model._id} value={model._id}>
                                        {model.modelName}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}

                    <label className='block text-white -700 font-bold mt-8'>
                        Name:
                        <input type="text" className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={name} onChange={(event) => setName(event.target.value)} />
                    </label>

                    <label className='block text-white -700 font-bold mt-8'>
                        Description:
                        <textarea value={description} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(event) => setDescription(event.target.value)} />
                    </label>

                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
                </form>
            )
            }
        </div>
    )
}

export default AddService