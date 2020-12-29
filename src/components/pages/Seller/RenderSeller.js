import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  .main {
    .seller-info {
      .bg-img {
        height: 300px;
        padding: 15px;
        background-image: url('https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
        background-size: cover;
        background-position: center;
      }

      .info {
        position: absolute;
        height: 400px;
        width: 90%;
        top: 100px;
        left: 5%;
        border-radius: 5px;
        background-color: #fff;
      }
    }

    .seller-products {
      border: 1px solid orange;
      padding: 230px 20px 20px 20px;
      background-color: #f7f7f7;

      h2 {
        margin: 0;
        font-weight: bold;
        border-bottom: 1px solid #b8b9b9;
      }
    }
  }
`;

export default function RenderSeller({
  selectedSeller,
  selectedProduct,
  inventory,
}) {
  console.log(inventory);

  return (
    <Wrapper>
      <Link to={`/marketplace/item/${selectedProduct.id}`}>
        <ArrowLeftOutlined />
      </Link>

      <div className="main">
        <div className="seller-info">
          <section className="bg-img" />
          <section className="info"></section>
        </div>

        <div className="seller-products">
          <h2>Items for sale(99)</h2>
        </div>
      </div>
    </Wrapper>
  );
}
