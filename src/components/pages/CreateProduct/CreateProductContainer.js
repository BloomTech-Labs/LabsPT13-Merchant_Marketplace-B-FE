import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { LoadingComponent } from '../../common';
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
  const [formInfo, setFormInfo] = useState({ ...initialState });
  const [images, setImages] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [imageSelected, setImageSelected] = useState(true);
  const [postingProduct, setPostingProduct] = useState(false);
  const [error, setError] = useState('');
  const { userInfo } = useSelector(state => state.userInfo);
  const { authState } = useOktaAuth();
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
    setImageSelected(true);
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
      setImageSelected(false);
    } else {
      // convert the tags to a string before and add seller id
      const product = {
        ...formInfo,
        tags: formInfo.tags.join(),
        profile_id: userInfo.sub,
      };

      setPostingProduct(true);
      setError('');

      createProduct({ product, images }, authState)
        .then(() => {
          setPostingProduct(false);
          history.push('/');
        })
        .catch(err => {
          setError("Can't post product now. Try again?");
          console.error(err);
        });

      // reset form
      setFormInfo(initialState);
      setImages([]);
    }
  };

  return (
    <LoadingComponent active={postingProduct} message="Listing your item...">
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
        imageSelected={imageSelected}
        error={error}
      />
    </LoadingComponent>
  );
}
