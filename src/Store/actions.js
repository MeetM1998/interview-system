import {
  Add_Interview_Result,
  Update_Interview_Result,
  Remove_Interview_Result,
} from "../Store/actionType";

export function addResult(values) {
  return {
    type: Add_Interview_Result,
    payload: values,
  };
}

export function updateResult(values) {
  return {
    type: Update_Interview_Result,
    payload: values,
  };
}

export function removeResult(id) {
  return {
    type: Remove_Interview_Result,
    payload: id,
  };
}
