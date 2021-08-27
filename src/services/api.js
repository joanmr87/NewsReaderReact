export async function getNews(url, set) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set(data.articles))
      .catch((err) => {
        console.log(err);
      });
  }

  export function getNewsOptions() {
      return {
          enbled: false,
          staleTime: 300000,
          refetchOnMount: false,
      };
  }

  export async function getNewsSearch(url, searchText) {
    fetch(url)
      .then((res) => res.json())
      
  }