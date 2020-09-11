/*
Export the following API Util functions with the specified parameters:

1. `fetchReports`
2. `fetchReport(reportId)`
3. `createReport(report)`
4. `updateReport(report)`
5. `deleteReport(reportId)`
*/

export const fetchReports = ()=>{
    return $.ajax({
        method: 'GET',
        url: '/api/reports'
    })
}

export const fetchReport =(reportId)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/reports/${reportId}`,
        data: reportId
    })
}

export const createReport=(report) =>{
    return $.ajax({
        method: 'POST',
        url: '/api/reports',
        data: {report}
    })
}

export const updateReport = (report) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reports/${report.id}`,
        data: {report}
    })
}

export const deleteReport = (reportId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reports/${reportId}`,
        data: reportId
    })
}