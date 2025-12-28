// import axios from 'axios';

// const strapi = axios.create({
//   baseURL: 'http://127.0.0.1:1337',
// });

// export const fetchContent = async (endpoint) => {
//   try {
//     // const response = await strapi.get(`/api/eventis`, {
//     const response = await strapi.get(`/api/${endpoint}`, {
//       headers: {
//         Authorization: `Bearer bcfd5a2c0402279cff3fb5d748cf172eee12dcbe73100fa274a9c5953e61dd47d774ba76831f027b830cd89bb7b1859d7e93e85e2885987f053f41575e81f934d4df6e442876db832f2d6c10586118c2c09d54ef63c88eb338c587518cf104ea905bfcf349bdc2ae8465d1c03224719d0d09b9fc199dc7b1e7a06f5bc0841145`, // Sostituisci YOUR_ACCESS_TOKEN con il tuo token
//       },
//     });
//     return  console.log(response.data); 
//   } catch (error) {
//     console.error('Error fetching data from Strapi:', error.response ? error.response.data : error.message);

//     console.log(error);
    
//     return error;
//     ;
//   }
// };


import axios from 'axios';


/**
 * Fetches data from the Strapi API using Axios
 * @param {Object} params - The parameters for the request
 * @param {string} params.endpoint - The endpoint to fetch from
 * @param {Object} [params.query] - The query parameters to add to the URL
 * @param {string} [params.wrappedByKey] - The key to unwrap the response from
 * @param {boolean} [params.wrappedByList] - If the response is a list, unwrap it
 * @returns {Promise<any>}
 */
export default async function fetchApi({ endpoint, query, wrappedByKey, wrappedByList }) {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  console.log(import.meta.env.STRAPI_URL);

  const baseUrl = `${import.meta.env.STRAPI_URL}/api/${endpoint}`;

  // Prepare query string if available
  const params = query ? new URLSearchParams(query) : undefined;

  try {
    const res = await axios.get(baseUrl, { params });
    let data = res.data;

    // Optionally unwrap by key
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    // Optionally unwrap list
    if (wrappedByList) {
      data = data[0];
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
