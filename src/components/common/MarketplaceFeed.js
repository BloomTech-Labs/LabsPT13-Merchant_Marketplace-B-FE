import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default function MarketplaceFeed({ getProducts }) {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => {
        console.log(res);
        setItems(res);
      })
      .catch(error => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getProducts]);

  return (
    <Wrapper className="marketplace">
      <h1>Marketplace Feed</h1>
      {isFetching ? <h2>Fetching Product...</h2> : console.log(items)}
    </Wrapper>
  );
}
