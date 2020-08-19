export default function reduceQuery(obj) {
  let res = '';

  for (let key in obj) {
    res += `${key}=${obj[key]}&`;
  }

  return res;
}