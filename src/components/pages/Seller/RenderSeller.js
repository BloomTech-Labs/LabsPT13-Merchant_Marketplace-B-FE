import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Feedback } from '../../common';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;

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
        max-width: 1100px;
        left: calc((100vw - 1100px) / 2);
        top: 100px;
        padding: 15px;
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
            display: flex;
            width: 48%;
            padding: 10px;
          }

          .left {
            flex-direction: column;

            h3 {
              font-weight: bold;
            }
            section {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              border-bottom: 1px solid #9fb1cc;
              margin-top: 10px;
            }

            .feedback {
            }

            .member-since {
            }
          }

          .right {
            justify-content: center;
            align-items: center;

            a {
              height: fit-content;
            }
          }

          .middle {
            width: 2px;
            background-color: #9fb1cc;
            margin: 10px 0;
          }
        }
      }
    }

    .products-wrapper {
      padding: 150px 20px 20px 20px;

      h2 {
        margin: 0 0 20px 0;
        font-weight: bold;
        border-bottom: 1px solid #b8b9b9;
      }

      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .product-card {
          height: 250px;
          width: 230px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition-duration: 0.3s;
          border: 1px solid #cecccc;

          &:hover {
            box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          img {
            height: 180px;
            width: 250px;
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            object-fit: cover;
          }

          .details {
            padding: 5px;
            height: 70px;
            background-color: #fff;

            h3,
            h4 {
              font-size: 16px;
              margin: 0;
            }
            h3 {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;

export default function RenderSeller({
  selectedSeller,
  selectedProduct,
  inventory,
}) {
  let joiningDate = new Date(selectedSeller.created_at)
    .toDateString()
    .split(' ');

  const [value, updateValue] = useState(4.5);

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
                <section className="feedback">
                  <h3>Feedback Ratings:</h3>
                  <Feedback
                    value={value}
                    updateValue={newValue => updateValue(newValue)}
                  />
                </section>

                <section className="member-since">
                  <h3>Member since:</h3>
                  <div style={{ display: 'flex' }}>
                    {`${joiningDate[1]} ${joiningDate[2]}, ${joiningDate[3]}`} |
                    <LocationOnIcon color="secondary" fontSize="small" />{' '}
                    California
                  </div>
                </section>
              </div>

              <div className="middle" />

              <div className="right">
                <a href="google.com"> Sell all reviews</a>
              </div>
            </div>
          </section>
        </div>

        <div className="products-wrapper">
          <h2>Items for sale({inventory.length})</h2>

          <div className="products">
            {inventory.map(p => (
              <div key={p.id} className="product-card">
                <img src={p.images[0].img_url} alt="inventory product" />

                <div className="details">
                  <h4>${p.price}</h4>
                  <h3>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
