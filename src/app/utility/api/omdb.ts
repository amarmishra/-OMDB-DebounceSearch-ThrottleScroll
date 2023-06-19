  // API functionality
  const API_ROOT = 'https://www.omdbapi.com/?apikey=ee81bd25&';

  const API_URLS = {
    search: (search:string, page = 1) => {
      return `${API_ROOT}s=${search}${page ? `&page=${page}` : ``}`;
    },
    searchById: (id:string) => {
      return `${API_ROOT}i=${id}`;
    },
  };

  export default API_URLS   