import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div className={styles.text}>
    <input
      className={styles.input}
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      required
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
