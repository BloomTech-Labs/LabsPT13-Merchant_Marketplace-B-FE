import React, { useState } from 'react';
import axios from 'axios';
import RenderCreateProduct from './RenderCreateProduct';

const initialState = {
  title: '',
  description: '',
  category: '',
  tags: [],
  price: '',
  brand: '',
  condition: '',
  delivery_method: '',
};

export default function CreateProductContainer() {
  const userInfo = JSON.parse(window.localStorage.getItem('user'));
  const [formInfo, setFormInfo] = useState(initialState);
  const [images, setImages] = useState([]);
  const [newTag, setNewTag] = useState('');

  const onDropImages = images => {
    setImages(images);
  };

  const handleChange = (name, value) => {
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleTagChange = e => setNewTag(e.target.value);

  const addTag = () => {
    setFormInfo({ ...formInfo, tags: [...formInfo.tags, newTag] });
    setNewTag('');
  };

  const removeTag = tag => {
    setFormInfo({ ...formInfo, tags: formInfo.tags.filter(t => t !== tag) });
  };

  const handleKeyPress = e => {
    if (e.which === 13) {
      e.preventDefault();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // convert the tags to a string before and add seller id
    const productData = {
      ...formInfo,
      tags: formInfo.tags.join(),
      profile_id: userInfo.sub,
    };

    // validate form data

    // post form data to backend
    let data = new FormData();

    // append product info
    Object.keys(productData).map(key => {
      data.append(key, productData[key]);
    });
    // append all uploaded images
    images.forEach((img, i) => {
      data.append(`img_${i + 1}`, img);
    });

    // axios
    //   .post('http://localhost:8000/products', data)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    // reset form
    setFormInfo(initialState);
    setImages([]);
  };

  return (
    <div>
      <RenderCreateProduct
        userInfo={userInfo}
        formInfo={formInfo}
        newTag={newTag}
        images={images}
        onDropImages={onDropImages}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
        handleTagChange={handleTagChange}
        addTag={addTag}
        removeTag={removeTag}
      />
    </div>
  );
}
