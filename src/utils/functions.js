export const convertAgeToYears = (ageNUmber = 0) => {
  const secondsInYear = 365.25 * 24 * 60 * 60; // average number of seconds in a year
  const years = ageNUmber / secondsInYear;

  return Math.round(Number(years.toFixed(2)));
};
