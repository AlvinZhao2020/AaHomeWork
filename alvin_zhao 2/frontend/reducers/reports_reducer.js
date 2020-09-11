import {
  RECEIVE_REPORTS,
  RECEIVE_REPORT,
  REMOVE_REPORT,
} from '../actions/report_actions';
import merge from 'lodash/merge'

/*
Export a `ReportsReducer` that takes in the old state and appropriately handles
all report actions.
*/
const ReportsReducer =(oldState={},action)=>{
  Object.freeze(oldState)
  let newState = Object.assign({},oldState)
  switch (action.type) {
    case RECEIVE_REPORTS:
      return Object.assign({},action.reports);
    case REMOVE_REPORT:
      delete newState[action.reportId]
      return newState
    case RECEIVE_REPORT:
      newState[action.report.id]= action.report
      return newState
    default:
      return oldState
  }

}

export default ReportsReducer