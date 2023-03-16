const getUsdCurrentPrice = async () =>
{
  let url = 'https://api.bluelytics.com.ar/v2/latest';
  let answ = await fetch (url);
  const data = await answ.json();
  return data;
}
export {getUsdCurrentPrice}