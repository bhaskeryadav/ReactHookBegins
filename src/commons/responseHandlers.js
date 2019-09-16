import { SUCCESS } from "./constants";

export const handleSuccessResponse = ({
  actionType,
  dispatch,
  response,
  postProcessData
}) => {
  return dispatch({
    type: `${actionType}${SUCCESS}`,
    payload: response,
    postProcessData
  });
};
