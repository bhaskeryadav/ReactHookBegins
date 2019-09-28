import { fromJS, List } from "immutable";
import { SUCCESS } from "../../commons/constants";
import { makeRestCall } from "../../commons/makeRestCall";

const FETCH_MESSAGES = "FETCH_MESSAGES";
const ADD_MESSAGE = "ADD_MESSAGE";

const initialState = fromJS({
  messages: [],
  blue: [],
  yellow: [],
  red: [],
  brown: []
});

export const getMessages = () => {
  console.log("making call...");
  return makeRestCall({
    url: "https://onhir.sse.codesandbox.io/",
    method: "GET",
    actionType: FETCH_MESSAGES
  });
};

export const addMessage = (data, dispatch) => {
  return dispatch({
    type: "ADD_MESSAGE",
    payload: data
  });
};

const mapResponseToHandler = (state, payload) => {
  console.log(payload);
  const messages = payload;
  console.log("state >>>>>", messages);

  return state.set("messages", List(messages));
};

const addMessageToState = (state, payload) =>
  state.set("messages", List([payload, ...state.get("messages").toJS()]));

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action;

  const handlers = {
    [`${FETCH_MESSAGES}${SUCCESS}`]: state =>
      mapResponseToHandler(state, payload),
    [`${ADD_MESSAGE}`]: state => addMessageToState(state, payload)
  };

  console.log(action, handlers[type]);
  return handlers[type] ? handlers[type](state) : state;
}
