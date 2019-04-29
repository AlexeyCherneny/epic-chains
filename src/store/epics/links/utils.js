export const apiCall = (request, requestHandler) => {
  const call = new Promise((resolve, reject) => {
    try {
      request()
        .then(response => resolve(requestHandler(response)))
        .catch(response => resolve(requestHandler(response)));
    } catch (error) {
      console.error("Unexpected error: ", error);
      reject();
    }
  });

  return call;
};
