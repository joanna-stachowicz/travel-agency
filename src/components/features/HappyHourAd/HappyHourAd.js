import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  constructor(props) {
    super(props);
    setInterval(() => { this.forceUpdate(); }, 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    let countdownTime = this.getCountdownTime();
    if (countdownTime > 60 * 60 * 23) {
      countdownTime = this.props.promoDescription;
    }
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Happy Hour</h3>
        <div className={styles.promoDescription}>{countdownTime}</div>
      </div>
    );
  }
}

export default HappyHourAd;
