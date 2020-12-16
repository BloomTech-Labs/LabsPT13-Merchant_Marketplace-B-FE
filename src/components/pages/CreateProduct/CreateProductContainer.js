import React, { useState } from 'react';
import RenderCreateProduct from './RenderCreateProduct';

export default function CreateProductContainer() {
  const userInfo = JSON.parse(window.localStorage.getItem('user'));

  const [formInfo, setFormInfo] = useState({
    images: [],
    seller_id: userInfo.sub,
    title: '',
    description: '',
    category: '',
    tags: '',
    price: '',
    brand: '',
    condition: '',
    delivery_method: '',
  });

  const onDropImages = (imageFiles, photoDataURLs) => {
    setFormInfo({ ...formInfo, images: imageFiles });
  };

  const handleChange = (name, value) => {
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Submit form info');
  };

  console.log(formInfo.description);

  return (
    <div>
      <RenderCreateProduct
        userInfo={userInfo}
        formInfo={formInfo}
        onDropImages={onDropImages}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
