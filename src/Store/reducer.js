import produce from "immer";
import {
  Add_Interview_Result,
  Update_Interview_Result,
  Remove_Interview_Result,
} from "./actionType";

const initialState = {
  interviewResult: [],
};

const InterviewResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Interview_Result: {
      const newState = produce(state, (draftState) => {
        action.payload.id = Math.random().toString();
        draftState.interviewResult.push(action.payload);
      });

      return newState;
    }

    case Remove_Interview_Result: {
      const newState = produce(state, (draftState) => {
        const resultIndex = draftState.interviewResult.findIndex(
          (item) => item.id === action.payload
        );
        draftState.interviewResult.splice(resultIndex, 1);
      });
      return newState;
    }

    case Update_Interview_Result: {
      const newState = produce(state, (draftState) => {
        let index = draftState.interviewResult.findIndex(
          (item) => item.id === action.payload.id
        );

        draftState.interviewResult[index] = action.payload;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default InterviewResultReducer;
