import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

export default function PhotosUploader() {
  const [photos, setPhotos] = useState([]);

  const onDrop = (photoFiles, photoDataURLs) => {
    setPhotos([...photos, photoFiles]);
  };

  console.log(photos);

  return (
    <ImageUploader
      withIcon={false}
      withPreview={true}
      buttonText="Add Photos"
      onChange={onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
      label="Max file size: 5MB, Accepted: (JPG, PNG, GIF)"
    />
  );
}
