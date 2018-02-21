import getAbsolutePath from 'Utils/paths';

async function fetchApiAsync({ data, method, url }) {
  const options = {
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    method,
  };
  const response = await fetch(getAbsolutePath(url), options);
  const json = await response.json();
  return json;
}

function fetchApi(request) {
  return fetchApiAsync(request).then(tasks => tasks);
}

export default fetchApi;
