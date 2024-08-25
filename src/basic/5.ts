enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}


const isWeekend = (day: string): boolean => {
    return DayOfWeek.Saturday === day || DayOfWeek.Sunday === day
}

isWeekend(DayOfWeek.Monday)