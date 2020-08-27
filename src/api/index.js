import { http, reduceQuery } from '@/utils'

async function getData(type = '', id = [], query = {}) {
  try {
    id = id.join(',');
    query = reduceQuery(query);

    const data = await http.GET(`${type}/${id}?${query}`);

    return data;
  } catch (error) {
    console.error('ERROR FROM API SERICE', error);
  }
}

export {
  getData
}
