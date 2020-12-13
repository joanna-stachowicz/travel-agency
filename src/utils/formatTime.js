export const formatTime = (arg) => {

  if (typeof (arg) !== 'number') {
    return null;
  }
  if (arg < 0) {
    return null;
  }

  let hour = Math.floor((arg / 3600) % 60);
  let minutes = Math.floor((arg / 60) % 60);
  let seconds = arg % 60;

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return hour + ':' + minutes + ':' + seconds;
};

