import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const Wrapper = styled.div`
  position: fixed;
  width: calc(100% - 360px);
  height: 100%;

  .carousel {
    width: 100%;

    svg {
      height: 80px;
      width: 40px;
    }

    .image-gallery-image {
      height: 80vh;
      object-fit: cover;
    }

    .image-gallery-icon {
      padding: 0;
      margin: 0 10px;
    }

    .image-gallery-fullscreen-button {
      margin: 0 20px 20px 0;
    }

    .image-gallery-thumbnails-container {
      height: 20vh;
      cursor: auto;

      .image-gallery-thumbnail {
        border-radius: 10px;
        cursor: pointer;

        img {
          border-radius: 5px;
        }
      }

      .active {
        border-color: #2d88ff;
        border-radius: 10px;
      }
    }
  }
`;

export default function ImagesGallery({ images }) {
  return (
    <Wrapper>
      <ImageGallery
        items={images}
        showPlayButton={false}
        additionalClass="carousel"
      />
    </Wrapper>
  );
}
