import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, limits, tripCost, price, setOptionValue }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    ({ formatPrice(Number(tripCost.replace(/[^0-9.-]+/g, '')) * parseFloat(currentValue) * parseFloat(price) / parseFloat(100))})
  </div >
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  tripCost: PropTypes.string,
  price: PropTypes.number,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
