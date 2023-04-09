import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BrandsForm() {

  const [brands, setBrands] = useState([]);
  const [brandSelected, setIsBrandSelected] = useState(false); // new state variable
  const [selectedBrand, setSelectedBrand] = useState('');


  // useEffect(() => {
  //     // Fetch all brands on page load
  //     axios.get(`/api/getModels?brand=${selectedBrand}`).then((res) => {
  //       setModels(res.data.data);
  //       // console.log(models);
  //     });
  //   }, [selectedBrand]);

  const handleBrandClick = (event) => {
    setIsBrandSelected(true);
    const brandId = event.target.value;
    setSelectedBrand(brandId);
  }

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
        <p className="text-green-500  lg:text-3xl font-bold mt-4">Display Models of the selected brand!</p>
      ) : (
        <div className="grid grid-cols-4 grid-rows-4 gap-8 mt-8 ml-8 mb-8 mr-8  lg:gap-y-24  bg-black ">
          {/* Display brands */}
          {brands.map((brand) => (
            <div className=' h-[50px] cursor-pointer' onClick={handleBrandClick} key={brand._id}>
              <img
                src={brand.Image}
                alt={brand.title}
                onClick={() => handleBrandClick(brand)}
                className='rounded-full hover:opacity-50  h-full w-full object-fill lg:object-cover '
              />
            </div>
          ))}

          {/* Display models for selected brand */}
          {/* {models.map((model) => (
        <div key={model._id}>
          <p>{model.name}</p>
          <button onClick={() => handleModelClick(model)}>Show services</button>
        </div>
      ))} */}

          {/* Display services for selected model */}
          {/* {services.map((service) => (
        <div key={service._id}>
          <p>{service.name}</p>
          <p>{service.description}</p>
        </div>
      ))} */}
        </div>
      )}
    </div>
  );
}
