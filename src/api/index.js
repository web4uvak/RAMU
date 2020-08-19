import { http, reduceQuery } from '@/utils'

async function getEpisodes(id = [], query = {}) {
  try {
    id = id.join(',');
    query = reduceQuery(query);

    const data = await http.GET(`episode/${id}?${query}`);

    return data;
  } catch (error) {
    console.error('ERROR FROM API SERICE', error);
  }
}

export {
  getEpisodes
}
