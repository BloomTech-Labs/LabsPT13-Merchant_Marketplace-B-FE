import axios from 'axios';

// we will define a bunch of API calls here.
const baseUrl = process.env.REACT_APP_API_URI;
// const profiles = `${process.env.REACT_APP_API_URI}/profiles`;
// const products = `${process.env.REACT_APP_API_URI}/products`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

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

const getProfileData = authState => {
  try {
    return apiAuthGet(`${baseUrl}/profile`, getAuthHeader(authState)).then(
      response => response.data
    );
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

const getProductById = async (id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/products/${id}`, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

const removeWishlistById = async (profile_id, product_id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthDelete(
      `${baseUrl}/wishlist/${profile_id}/${product_id}`,
      headers
    ).then(res => res.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

const addToWishlist = async (profile_id, product_id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthPost(
      `${baseUrl}/wishlist/${profile_id}/${product_id}`,
      headers
    ).then(res => res.data);
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

const getWishListProducts = async (profile_id, authState) => {
  try {
    const headers = getAuthHeader(authState);
    return apiAuthGet(`${baseUrl}/wishlists/${profile_id}`, headers).then(
      res => res.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return {};
    });
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getMarketProducts,
  getProductById,
  createProduct,
  getWishListProducts,
  removeWishlistById,
  addToWishlist,
};
