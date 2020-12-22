import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderCreateProduct from './RenderCreateProduct';
import { createProduct } from '../../../api';

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
  const { authState } = useOktaAuth();
  const userInfo = JSON.parse(window.localStorage.getItem('user'));
  const [formInfo, setFormInfo] = useState(initialState);
  const [images, setImages] = useState([]);
  const [newTag, setNewTag] = useState('');

  const onDropImages = files => {
    let dataURLs = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        dataURLs.push({ image: reader.result, name: files[i].name });
      };
    }

    setImages(dataURLs);
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
    const product = {
      ...formInfo,
      tags: formInfo.tags.join(),
      profile_id: userInfo.sub,
    };

    // validate form data
    // !TODO make sure all required inputs are filled

    createProduct({ product, images }, authState)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });

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
