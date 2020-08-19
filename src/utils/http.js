const baseUrl = 'https://rickandmortyapi.com/api';

const http = {
  GET(url, options) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/${url}`, options)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  },
  // POST() {},
  // PUT() {},
  // DELETE() {},
}

export default http;
