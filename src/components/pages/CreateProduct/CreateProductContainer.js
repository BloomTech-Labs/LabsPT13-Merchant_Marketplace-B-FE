import React, { useState } from 'react';
import RenderCreateProduct from './RenderCreateProduct';

const initialState = {
  seller_id: null,
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

  const onDropImages = (imageFiles, photoDataURLs) => {
    setImages(imageFiles);
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
    setFormInfo(initialState);
    setImages([]);

    // refactor tags to a sting before submitting
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
