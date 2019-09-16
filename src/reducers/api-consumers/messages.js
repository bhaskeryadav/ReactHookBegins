import { fromJS, List } from "immutable";
import { SUCCESS } from "../../commons/constants";
import { makeRestCall } from "../../commons/makeRestCall";

const FETCH_MESSAGES = "FETCH_MESSAGES";
const ADD_MESSAGE = "ADD_MESSAGE";

const initialState = fromJS({
  messages: []
});

export const getMessages = () => {
  console.log("making call...");
  return makeRestCall({
    url: "https://swapi.co/api/people",
    method: "GET",
    actionType: FETCH_MESSAGES
  });
};

const mapResponseToHandler = (state, payload) => {
  const messages = payload.results.map((d, index) => {
    let msg = {};
    msg.message = d.name;
    msg.type = d.eye_color;
    msg.id = index;
    return msg;
  });
  console.log("state >>>>>", state);

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
