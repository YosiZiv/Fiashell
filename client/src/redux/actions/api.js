export const API_REQUEST = "[mppum] API Request";

export const apiRequest = (method, url, body, onSuccess, onError) => {
  console.log("API REQUEST WORK ", url, body);

  return {
    type: API_REQUEST,
    payload: body,
    meta: { method, url, onSuccess, onError },
  };
};
