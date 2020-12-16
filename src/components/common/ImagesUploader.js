import React from 'react';
import ImageUploader from 'react-images-upload';

export default function ImagesUploader({ onDropImages }) {
  return (
    <ImageUploader
      withIcon={false}
      withPreview={true}
      buttonText="Add Photos"
      onChange={onDropImages}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
      label="Max file size: 5MB, Accepted: (JPG, PNG, GIF)"
    />
  );
}
