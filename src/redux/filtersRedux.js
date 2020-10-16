/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const HANDLE_DURATION = createActionName('HANDLE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const handleDuration = payload => ({ payload, type: HANDLE_DURATION });
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };

    case HANDLE_DURATION:
      if (action.payload.type == 'from') {
        let changedFrom = parseInt(action.payload.value);
        if (changedFrom > statePart.duration.to) {
          changedFrom = statePart.duration.to;
        }
        return {
          ...statePart,
          duration: {
            from: changedFrom,
            to: statePart.duration.to,
          },
        };
      }
      else if (action.payload.type == 'to') {
        let changedTo = parseInt(action.payload.value);
        if (changedTo < statePart.duration.from) {
          changedTo = statePart.duration.from;
        }
        return {
          ...statePart,
          duration: {
            to: changedTo,
            from: statePart.duration.from,
          },
        };
      }
      break;

    case ADD_TAG: {
      let newState = {
        ...statePart,
      };
      newState.tags.push(action.payload);
      return newState;
    }

    case REMOVE_TAG: {
      let anotherState = {
        ...statePart,
      };
      let index = anotherState.tags.indexOf(action.payload);
      anotherState.tags.splice(index, 1);
      return anotherState;
    }

    default:
      return statePart;
  }
}
