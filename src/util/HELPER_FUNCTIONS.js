export const getCopyableReport = (report) => {
  const itemsToConvertToParagraph = [
    report.title,
    `Date (dd/mm/yyyy): ${getDateInEuropeanFormat(report.date)}`,
    `Group: ${report.group.name}`,
    `Start Time: ${report.startTime}`,
    `End Time: ${report.endTime}`,
    `Teachers: ${report.teachers.join(', ')}`,
    `Support Staff: ${report.support.length > 0 ? support.join(', ') : 'N/A'}`,
    `Attendance: ${getAttendanceParagraph(report.group, report.attendance, report.missing)}`,
    `Subject: ${report.subject}`,
    `Skill: ${report.skill}`,
    `Muscle: ${report.muscle}`,
    `Technique: ${report.technique}`,
    `Extra Notes: ${getListFromItems(report.notes)}`,
    `Action Items: ${getListFromItems(report.actionItems)}`
  ]

  return itemsToConvertToParagraph.join(' \n\n')
}

export const getHoursAndMinutes = (time) => {

  let hours = time.getHours();
  let minutes = time.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

export const getDateInEuropeanFormat = (date) => {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

export const getAttendanceParagraph = (group, attendance, missing) => {
  return `${attendance}/${group.numberOfStudents} ( ${missing.map(s => `${s.name}${s.reason ? ` - ${s.reason}` : ''}`).join(', ')} )`
}

export const getListFromItems = (list) => {
  return `${list.length > 0 ? list.map(l => `\n - ${l}`).join('') : '\n - N/A'}`
}