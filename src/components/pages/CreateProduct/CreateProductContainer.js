import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
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
  const [imagesSelected, setImagesSelected] = useState(true);
  const [listingProduct, setListingProduct] = useState(false);
  const history = useHistory();

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
    setImagesSelected(true);
  };

  const handleTagChange = e => setNewTag(e.target.value);

  const handleChange = e => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

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

    if (!images.length) {
      setImagesSelected(false);
    } else {
      // convert the tags to a string before and add seller id
      const product = {
        ...formInfo,
        tags: formInfo.tags.join(),
        profile_id: userInfo.sub,
      };

      setListingProduct(true);

      createProduct({ product, images }, authState)
        .then(() => {
          setListingProduct(false);
          history.push('/');
        })
        .catch(err => {
          console.error(err);
        });

      // reset form
      setFormInfo(initialState);
      setImages([]);
    }
  };

  return (
    <div>
      {listingProduct ? (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin tip="Loading" size="large" style={{ fontSize: '18px' }} />
        </div>
      ) : (
        <RenderCreateProduct
          userInfo={userInfo}
          formInfo={formInfo}
          newTag={newTag}
          images={images}
          onDropImages={onDropImages}
          handleChange={handleChange}
          handleTagChange={handleTagChange}
          handleSubmit={handleSubmit}
          handleKeyPress={handleKeyPress}
          addTag={addTag}
          removeTag={removeTag}
          imagesSelected={imagesSelected}
        />
      )}
    </div>
  );
}
