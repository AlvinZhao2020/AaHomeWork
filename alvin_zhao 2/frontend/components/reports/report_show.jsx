import React from 'react';
import { Link } from 'react-router-dom';

import {
  formatDateTime
} from '../../util/date_util';

/*
Write a `ReportShow` presentational component that renders a report's
information (understanding, improvement, and date/time created/updated). This
component should receive the report from the store as props via its container
and fetch it once it has successfully mounted to the DOM. Only display the
`updatedAt` date/time if it is different than the `createdAt` date/time.
Additionally, include a link back to the `ReportIndex`.

Display the date and time of the `createdAt`/`updatedAt` properties like this:
`formatDateTime(this.props.report.createdAt)`
`formatDateTime(this.props.report.updatedAt)`
*/


class ReportShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestReport(this.props.match.params.reportId)
  }

  render(){
    let {report} = this.props
    return(
      <div>
        <p>{report.understanding}</p>
        <p>{report.improvement}</p>
        <Link to='/'>ReportIndex</Link>
        {formatDateTime(this.props.report.createdAt) === formatDateTime(this.props.report.updatedAt)?
          (<p>{formatDateTime(this.props.report.createdAt)}</p>) : (<p>{formatDateTime(this.props.report.updatedAt)}</p>)
        }
      </div>
    )
  }
}

export default ReportShow