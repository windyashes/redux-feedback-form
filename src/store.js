import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";

const feedbackReducer = (state = {
    feeling: null,
    understanding: null,
    support: null,
    comments: null
}, action) => {

    if(action.type === 'SUBMIT'){
        if(action.payload.part === '1'){
            return {...state, feeling: action.payload.info}
        }
    }

    return state;
}

function noSkip(){
    if(!feedback.feeling){
      history.push('/feeling');
    } else if (!feedback.understanding){
      history.push('/understanding')
    } else if (!feedback.support){
      history.push('/support')
    } else if (!feedback.comments){
      history.push('/comments')
    }
  }



const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

export default store;