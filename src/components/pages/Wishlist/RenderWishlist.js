import React from 'react';
import styled from 'styled-components';
import WishListCard from '../../common/WishListCard';
import { NavigationBar } from '../../common';

const Wrapper = styled.div``;

const RenderWishlist = () => {
  return (
    <Wrapper>
      <NavigationBar />
      <img
        className="Wishlist__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      <div>
        <h2 className="Wishlist__Title">Your Wishlist</h2>
        {/* {basket.map(item => (
            <WishlistCard
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}
      </div>
      <WishListCard />
    </Wrapper>
  );
};
export default RenderWishlist;
