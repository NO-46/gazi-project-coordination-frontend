/* eslint-disable import/no-duplicates */

import differenceInHours from "date-fns/differenceInHours";
/* eslint-enable import/no-duplicates */

export const DAY_IN_HOURS = 24;

/**
 * @returns `true` if there is less than 24 hours (1 full day) between given dates
 */
function getIsWithinLastDay(dateLeft: Date, dateRight: Date) {
  return differenceInHours(dateLeft, dateRight) < DAY_IN_HOURS;
}

export {getIsWithinLastDay};
