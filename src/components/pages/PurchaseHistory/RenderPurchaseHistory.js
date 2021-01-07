import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSeller, selectProduct } from '../../../state/actions';
import { formatDate } from '../../../helpers';
import { FormSelect, NavigationBar } from '../../common';

const Wrapper = styled.div`
  .orders-wrapper {
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 15px;

    h2 {
      font-weight: bold;
      letter-spacing: 1px;
      border-bottom: 2px solid #b8b9b9;
      margin-bottom: 20px;
    }
    .order-card {
      display: flex;
      align-self: center;
      background-color: #f7f7f7;
      width: 100%;
      max-width: 950px;
      height: 230px;
      padding: 10px;

      .label {
        color: gray;
      }

      .left {
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .top,
        .column {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .top {
          .column {
            flex-direction: column;
            height: 50px;

            div,
            span,
            a {
              font-size: 15px;
            }
            a {
              text-decoration: underline;
            }
          }
        }

        .bottom {
          display: flex;

          img {
            width: 170px;
            height: 150px;
            object-fit: cover;
          }
          a {
            font-size: 22px;
            font-weight: 200;
            margin-left: 15px;
            align-self: center;
            text-transform: uppercase;

            &:hover {
              text-decoration: underline;
            }
          }
          div {
            align-self: center;
            margin-left: auto;
          }
        }
      }

      .right {
        width: 35%;
        margin-left: 10px;
        border-left: 1px solid #b8b9b9;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .button {
          background-color: #272d3d;
          color: #f7f7f7;
          width: 140px;
          padding: 5px 10px;
          font-size: 16px;
          cursor: pointer;

          &:hover {
            border: 1px solid;
          }
        }

        select {
          width: 140px;
          font-size: 16px;
        }
      }
    }
  }
`;

export default function RenderPurchaseHistory({
  orders,
  loading,
  handleAction,
}) {
  const dispatch = useDispatch();

  return loading ? (
    <div>Loading orders...</div>
  ) : (
    <Wrapper>
      <NavigationBar />

      <div className="orders-wrapper">
        <h2>Orders({orders.length}):</h2>

        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="left">
              <section className="top">
                <div className="column">
                  <div className="label">PURCHASE DATE</div>
                  <span>{formatDate(order.created_at)}</span>
                </div>

                <div className="column">
                  <div className="label">ORDER NUMBER</div>
                  <span>05-06218-24005</span>
                </div>

                <div className="column">
                  <div className="label">SOLD BY</div>
                  <Link
                    to={`/marketplace/seller/${order.seller.name
                      .split(' ')
                      .join('-')}`}
                    onClick={() => dispatch(selectSeller(order.seller))}
                  >
                    {order.seller.name}
                  </Link>
                </div>

                <div className="column">
                  <div className="label">ORDER TOTAL</div>
                  <span>US ${order.total_price}</span>
                </div>
              </section>

              <section className="bottom">
                <img src={order.product.images[0].img_url} alt="Your order" />

                <Link
                  to={`/marketplace/item/${order.product.id}`}
                  onClick={() => dispatch(selectProduct(order.product))}
                >
                  {order.product.title}
                </Link>

                <div>
                  <div className="label">ORDER TOTAL</div>
                  <span>US ${order.product.price}</span>
                </div>
              </section>
            </div>

            <div className="right">
              <div className="button">Leave feedback</div>
              <FormSelect
                title="More actions"
                name="more"
                values={['Contact seller', 'Delete item']}
                onChange={handleAction}
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
