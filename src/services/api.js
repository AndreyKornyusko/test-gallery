
const baseURL = 'http://api.giphy.com/v1/gifs';
const ApiKey = 'O3iJIz4KNHqyrwfM88y7Abn9WA2607z0'

const getImages = (searchQuery) => {
  return fetch(`${baseURL}/search?q=${searchQuery}&api_key=${ApiKey}&limit=8`)
    .then(function (response) {
      console.log('response', response);
      return response.json();
    })
    .then(function (data) {
      console.log('data from api', data);
      if (data.meta.status === 200) {
        return data.data
      };
    })
    .catch(error => {
      console.error('Error: ', error);
    });
};

export { getImages };

