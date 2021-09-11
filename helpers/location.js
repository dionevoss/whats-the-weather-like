export const getCurrentLocation = async (sucess, error, options) =>
  await navigator.geolocation.getCurrentPosition(sucess, error, options)
