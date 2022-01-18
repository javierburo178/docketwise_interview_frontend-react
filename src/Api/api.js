export async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = process.env.REACT_APP_API_URL + endpoint;

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
