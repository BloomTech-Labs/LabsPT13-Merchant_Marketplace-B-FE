import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;

  .details {
    height: 110vh;
    width: 360px;
    align-self: flex-end;
  }

  .main {
    position: fixed;
    align-self: flex-start;
    width: calc(100% - 360px);
    height: 100%;
    display: flex;

    .carousel-wrapper {
      width: 100%;
      align-self: center;

      svg {
        height: 100px;
        width: 45px;
      }
    }
  }
`;

const RenderProduct = ({ product }) => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <Wrapper>
      <div className="main">
        <ImageGallery
          items={images}
          showPlayButton={false}
          additionalClass="carousel-wrapper"
        />
      </div>

      <div className="details">
        <h1>Details</h1>
      </div>
    </Wrapper>
  );
};

export default RenderProduct;
