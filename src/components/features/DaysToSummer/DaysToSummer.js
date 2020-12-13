import React from 'react';
import styles from './DaysToSummer.scss';

//https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
Date.prototype.isLeapYear = function () {
  const year = this.getFullYear();
  if ((year & 3) != 0) return false;
  return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function () {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const mn = this.getMonth();
  const dn = this.getDate();
  let dayOfYear = dayCount[mn] + dn;
  if (mn > 1 && this.isLeapYear()) dayOfYear++;
  return dayOfYear;
};

export const DaysToSummer = () => {

  let today = new Date();

  let firstDayOfSummer = new Date(today.getUTCFullYear(), 5, 21).getDOY();
  let firstDayOfNextSummer = new Date(today.getUTCFullYear() + 1, 5, 21).getDOY();
  let lastDayOfSummer = new Date(today.getUTCFullYear(), 8, 23).getDOY();
  let lastDayOfYear = new Date(today.getUTCFullYear(), 11, 31).getDOY();
  today = today.getDOY();

  let daysLeft = 0;
  if (today < firstDayOfSummer) {
    daysLeft = firstDayOfSummer - today;
  } else if (today > lastDayOfSummer) {
    daysLeft = lastDayOfYear - today + firstDayOfNextSummer;
  } else {
    daysLeft = 0;
  }

  let txt;
  if (daysLeft === 0) {
    txt = '';
  } else if (daysLeft === 1) {
    txt = `${daysLeft} day to summer!`;
  } else {
    txt = `${daysLeft} days to summer!`;
  }

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>{txt}</h1>
    </div>
  );
};

export default DaysToSummer;
