export const getCopyableReport = (report) => {
  const reportToText = `
  ${report.title}
  

  ${report.date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}
  

  ${report.group}
  

  ${report.startTime}
  

  ${report.endTime}
  

  ${report.teachers}


  ${report.support}
  

  ${report.attendance}
  

  ${report.missing}
  

  ${report.subject}
  

  ${report.skill}
  

  ${report.muscle}
  

  ${report.technique}
  

  ${report.notes}
  

  ${report.actionItems}`


  return reportToText
}
