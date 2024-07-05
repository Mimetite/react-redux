import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text,
        id: Date.now(),
    };
};

const deleteToDo = id => {
    return {
        type: DELETE,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                },
            ];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);

        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreator = {
    addToDo,
    deleteToDo,
};

export default store;