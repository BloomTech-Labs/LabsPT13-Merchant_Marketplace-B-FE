import React from 'react';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Feedback, ProductCard } from '../../common';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;

  .main {
    .seller-info {
      display: flex;
      justify-content: center;
      height: 300px;
      background: linear-gradient(
        0deg,
        rgba(209, 81, 26, 1) 0%,
        rgba(27, 82, 126, 1) 100%
      );

      .info {
        position: relative;
        max-width: 1100px;
        top: 100px;
        padding: 15px;
        border-radius: 5px;
        background-color: #fff;
        margin: 0 15px;

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
            justify-content: space-between;

            .details {
              min-width: 220px;

              h3 {
                font-weight: bold;
                margin: 0;

                a {
                  font-weight: normal;
                  margin-left: 3px;
                  letter-spacing: 2px;
                }
              }
            }

            .description {
              align-self: center;
              padding: 20px;
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
            padding: 10px;
          }

          .left {
            width: 60%;
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
          }

          .right {
            width: 30%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;

            a {
              text-decoration: underline;
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

    h2 {
      margin: 0 0 20px 0;
      font-weight: bold;
      border-bottom: 1px solid #b8b9b9;
    }

    .products-wrapper {
      padding: 150px 15px 15px 15px;

      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }
    }

    .reviews-wrapper {
      padding: 30px 15px 15px 15px;

      .reviews {
      }
    }
  }
`;

export default function RenderSeller({ selectedSeller, inventory, reviews }) {
  let joiningDate = new Date(selectedSeller.created_at)
    .toDateString()
    .split(' ');

  const avgRating = reviews.reduce((acc, curr) => acc + curr.rate, 0);

  return (
    <Wrapper>
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
                      ({reviews.length}
                      <StarFilled />)
                    </a>
                  </h3>
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
                    value={avgRating === 0 ? 0 : avgRating / reviews.length}
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
                <a href="google.com"> Seller reviews</a>
                <a href="google.com"> Contact Seller</a>
              </div>
            </div>
          </section>
        </div>

        <div className="products-wrapper">
          <h2>Items for sale({inventory.length})</h2>

          <div className="products">
            {inventory.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        <div className="reviews-wrapper">
          <h2>Reviews:({reviews.length})</h2>

          <div className="reviews"></div>
        </div>
      </div>
    </Wrapper>
  );
}
