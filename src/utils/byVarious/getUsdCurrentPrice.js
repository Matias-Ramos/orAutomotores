const getUsdCurrentPrice = async () => {
  const url = "https://api.bluelytics.com.ar/v2/latest";
  const answ = await fetch(url);
  let data = await answ.json();
  data = data.blue.value_avg;
  return data;
};
export { getUsdCurrentPrice };
