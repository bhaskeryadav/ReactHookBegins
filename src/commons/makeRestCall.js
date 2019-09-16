import { handleSuccessResponse } from "./responseHandlers";

export const makeRestCall = ({
  url,
  method,
  requestData,
  headers,
  actionType,
  postProcessData
}) => {
  return async dispatch => {
    try {
      const requestHeaders = { ...headers };
      const responsePromise = await fetch(url, {
        method,
        body: requestData,
        headers: requestHeaders
      });

      if (!responsePromise.ok) throw responsePromise;

      const response = await responsePromise.json();

      handleSuccessResponse({
        actionType,
        response,
        postProcessData,
        dispatch
      });
    } catch (error) {}
  };
};
