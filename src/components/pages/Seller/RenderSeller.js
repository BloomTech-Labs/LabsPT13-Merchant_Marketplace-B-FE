import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons';

const Wrapper = styled.div`
  .main {
    .seller-info {
      height: 300px;
      background: linear-gradient(
        0deg,
        rgba(209, 81, 26, 1) 0%,
        rgba(27, 82, 126, 1) 100%
      );

      .info {
        position: absolute;
        height: 400px;
        width: 90%;
        top: 100px;
        left: 5%;
        padding: 10px;
        border-radius: 5px;
        background-color: #fff;

        .top {
          display: flex;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #9fb1cc;

          .avatar {
            height: 150px;
            width: 150px;
            background-color: orange;
          }

          .top-right {
            display: flex;
            width: calc(100% - 150px);
            padding: 5px;

            .details {
              width: 250px;
              h3 {
                font-weight: bold;
                margin: 0;

                a {
                  font-weight: normal;
                  margin-left: 3px;
                }
              }
            }

            .description {
              margin: 50px 0 0 30px;
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          height: calc(100% - 170px);

          .left,
          .right {
            width: 48%;
            display: flex;
            padding: 10px;
            border: 1px solid #a8cea8;
          }

          .left {
            h3 {
              font-weight: bold;
            }
          }

          .right {
            justify-content: flex-end;

            a {
              height: fit-content;
            }
          }

          .middle {
            width: 1px;
            background-color: #9fb1cc;
            margin: 30px 0;
          }
        }
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
  console.log(selectedSeller);

  return (
    <Wrapper>
      <Link to={`/marketplace/item/${selectedProduct.id}`}>
        <ArrowLeftOutlined />
      </Link>

      <div className="main">
        <div className="seller-info">
          <section className="info">
            <div className="top">
              <div className="avatar">Seller Avatar</div>
              <div className="top-right">
                <section className="details">
                  <h3>
                    {selectedSeller.name}
                    <a href="google.com">
                      (66
                      <StarFilled />)
                    </a>
                  </h3>
                  <span>100% positive feedback</span>
                </section>

                <section className="description">
                  <p>
                    Hey just a seller who sells anything to make some money, i
                    collect supreme and any shoes. Feel safe buying with me!
                  </p>
                </section>
              </div>
            </div>

            <div className="bottom">
              <div className="left">
                <h3>Feedback Ratings:</h3>
              </div>

              <div className="middle" />

              <div className="right">
                <a href="google.com"> Sell all reviews</a>
              </div>
            </div>
          </section>
        </div>

        <div className="seller-products">
          <h2>Items for sale(99)</h2>
        </div>
      </div>
    </Wrapper>
  );
}
