import React from 'react';
import ImageUploader from 'react-images-upload';

export default function ImagesUploader({ onDropImages, images }) {
  return (
    <ImageUploader
      withIcon={false}
      withPreview={true}
      buttonText="Add Images"
      onChange={onDropImages}
      buttonStyles={{ display: images.length >= 5 ? 'none' : 'block' }}
      imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
      label="Max file size: 5MB, Accepted: (JPG, PNG, GIF)"
    />
  );
}
