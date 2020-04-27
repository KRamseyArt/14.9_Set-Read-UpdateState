function leapYear(year) {
  if(year < 1582) {
    throw new Error('Leap year rules do not work before 1582');
  }

  //assigns variables to either true or false based on certain conditions
  const div400 = year % 400 === 0;
  const div100 = year % 100 === 0;
  const div4 = year % 4 <= 0;

  //return true or false based on variable comparison
  return div400 || (div4 && !div100);
}

export default leapYear;