import axios from 'axios';

// we will define a bunch of API calls here.
const baseUrl = process.env.REACT_APP_API_URI;
// const profiles = `${process.env.REACT_APP_API_URI}/profiles`;
// const products = `${process.env.REACT_APP_API_URI}/products`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = (url, authHeader) => {
  return axios.get(url, { headers: authHeader });
};

const apiAuthPost = (url, data, authHeader) => {
  return axios.post(url, data, { headers: authHeader });
};

const apiAuthDelete = (url, data, authHeader) => {
  return axios.delete(url, data, authHeader);
};

const getProfileData = (authState, profile_id) => {
  try {
    return apiAuthGet(
      `${baseUrl}/profile/${profile_id}`,
      getAuthHeader(authState)
    ).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getProfileInventory = (authState, profile_id) => {
  try {
    return apiAuthGet(
      `${baseUrl}/profile/${profile_id}/inventory`,
      getAuthHeader(authState)
    ).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getMarketProducts = async authState => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/products`, headers).then(res => res.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getSellerReviews = async (authState, seller_id) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/reviews/${seller_id}`, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

const createProduct = async (product, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthPost(`${baseUrl}/products`, product, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

const getProfileOrders = async (authState, profile_id) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/orders/${profile_id}`, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
}

const getCartItems = async (profile_id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/carts/${profile_id}`, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
}

const removeWishlistById = async (profile_id, product_id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthDelete(
      `${baseUrl}/wishlists/${profile_id}/${product_id}`,
      headers
    ).then(res => res.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

const addToWishlist = async (body, authState) => {
  const headers = getAuthHeader(authState);
  return apiAuthPost(`${baseUrl}/wishlists`, body, headers)
    .then(res => res.data)
    .catch(error => {
      return new Promise(() => {
        console.log(error);
        return {};
      });
    });
};

const getWishListProducts = (profile_id, authState) => {
  const headers = getAuthHeader(authState);
  return apiAuthGet(`${baseUrl}/wishlists/${profile_id}`, headers)
    .then(res => res.data)
    .catch(err => {
      return new Promise(() => {
        console.log(err);
        return {};
      });
    });
};

export {
  sleep,
  getProfileData,
  getProfileInventory,
  getDSData,
  getMarketProducts,
  createProduct,
  getCartItems,
  getWishListProducts,
  removeWishlistById,
  addToWishlist,
  getSellerReviews,
  getProfileOrders,
};
