import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BrandsForm() {

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [services, setServices] = useState([]);
  const [brandSelected, setIsBrandSelected] = useState(false); // new state variable
  const [modelSelected, setIsModelSelected] = useState(false); // new state variable
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [whatsappModel, setWhatsappModel] = useState('');

  const handleBrandClick = (brand) => {
    // Set the selected brand
    setSelectedBrand(brand._id);
    console.log(selectedBrand);
    // Set brandSelected to true to display the models
    setIsBrandSelected(true);
  }

  const handleModelClick = (model) => {
    // Set the selected model
    setSelectedModel(model._id);
    // Fetch the services for the selected model
    setIsModelSelected(true);
    setWhatsappModel(model.modelName);
    console.log(whatsappModel)

  }

  const handleServiceClick = (event) => {
  const serviceName = event.target.value;
  setSelectedService(serviceName);
  setIsModalVisible(true);
  console.log(serviceName);
}

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send WhatsApp message with selected service and captured details
    const message = `Selected model: ${whatsappModel}\nSelected service: ${selectedService}\nName: ${event.target.name.value}\nAddress: ${event.target.address.value}\nMobile no: ${event.target.mobile.value}`;

    window.location.href = `https://wa.me/+917972393679/?text=${encodeURIComponent(message)}`;

    // Hide the modal
    setIsModalVisible(false);
  }


  useEffect(() => {

    // Fetch all brands on page load
    axios.get(`/api/getModels?brand=${selectedBrand}`).then((res) => {
      setModels(res.data.data);
      // console.log(models);
    });
  }, [selectedBrand]);


  useEffect(() => {

    // Fetch all brands on page load
    axios.get(`/api/getServices?model=${selectedModel}`).then((res) => {
      setServices(res.data.data);
      // console.log(models);
    });
  }, [selectedModel]);


  useEffect(() => {
    // Fetch all brands on page load
    axios.get('/api/getBrands').then((res) => {
      setBrands(res.data.data);
      // console.log(brands);
    });
  }, []);




  return (
    <div className='h-[20%] w-[90%]  mt-[-10%]  ml-[5%] border-2 border-white rounded-xl'>
      {brandSelected ? (
        <div className='grid grid-cols-4 grid-rows-4 gap-60 mt-8 ml-8 mb-8 mr-8  lg:gap-y-24  bg-black'>
          {models.map((model) => (
            <div key={model._id} className='cursor-pointer h-[150px] w-[150px]'>
              <img
                src={model.modelImage}
                alt={model.modelName}
                onClick={() => handleModelClick(model)}
                className='rounded-full hover:opacity-50  h-full w-full object-contain lg:object-cover '
              />
              <p  className='text-white text-center mt-4'>{model.modelName}</p>
              {/* <button className='text-white' onClick={() => handleModelClick(model)}>Show services</button> */}





              <div className='cursor-pointer'>
                {/* <img
                src={service.serviceImage}
                alt={service.serviceName}
                className='rounded-full hover:opacity-50  h-full w-full object-contain lg:object-cover '
              /> */}
              
              {modelSelected && (
          <div className='cursor-pointer'>
            <select value={selectedService} className='text-black w-full py-2 px-3 border rounded appearance-none' onChange={handleServiceClick} >
              <option value="">Select your issue</option>
              {services.map((service) => (
                <option key={service._id} value={service.serviceName}>
                  {service.serviceName} 
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    ))
              {isModalVisible ? (
                <div className=" inset-0 fixed bg-white bg-opacity-50 flex justify-center items-center">
                  <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-4">Enter your details</h2>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input className="w-full px-3 py-2 border rounded" id="name" name="name" type="text" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                        Address
                      </label>
                      <input className="w-full px-3 py-2 border rounded" id="address" name="address" type="text" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
                        Mobile no
                      </label>
                      <input className="w-full px-3 py-2 border rounded" id="mobile" name="mobile" type="tel" pattern="[0-9]{10}" required />
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded" onClick={() => setIsModalVisible(false)}>Cancel</button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Send</button>
                    </div>
                  </form>
                </div>
              ) : <h1>Wow</h1>}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 grid-rows-4 gap-8 mt-8 ml-8 mb-8 mr-8  lg:gap-y-24  bg-black ">
          {/* Display brands */}
          {brands.map((brand) => (
            <div className=' h-[50px] cursor-pointer' onClick={() => handleBrandClick(brand)} key={brand._id}>
              <img
                src={brand.Image}
                alt={brand.title}
                onClick={() => handleBrandClick(brand)}
                className='rounded-full hover:opacity-50  h-full w-full object-fill lg:object-cover '
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
