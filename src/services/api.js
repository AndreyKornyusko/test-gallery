
const baseURL = 'https://api.giphy.com/v1/gifs';
const ApiKey = 'O3iJIz4KNHqyrwfM88y7Abn9WA2607z0'

const getImages = (searchQuery, offset) => {
  return fetch(`${baseURL}/search?q=${searchQuery}&api_key=${ApiKey}&limit=24&offset=${offset}`)
    .then(function (response) {
      // console.log('response', response);
      return response.json();
    })
    .then(function (data) {
      // console.log('data from api', data);
      if (data.meta.status === 200) {
        return data.data
      };
    })
    .catch(error => {
      console.error('Error: ', error);
    });
};

export { getImages };

