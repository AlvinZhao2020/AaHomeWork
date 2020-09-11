import { connect } from 'react-redux';
import ReportShow from './report_show';
import { requestReport, requestReports } from '../../actions/report_actions';
import report_index_container from './report_index_container';

/*
Export a container component for the `ReportShow` that maps in the appropriate
report from the store as a `report` prop. Additionally, it should map in a
function that will dispatch `requestReport` to the store as a prop of the same
name.
*/
const mSTP = (state,ownState)=>(
    {
        report: state.reports[ownState.match.params.reportId]
    }
)

const mDTP = dispatch =>(
    {
        requestReport: (postId) =>dispatch(requestReport(postId))
    }
)

export default connect(mSTP,mDTP)(ReportShow)