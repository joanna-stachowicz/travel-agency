import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, orderOptions }) => {
  console.log(orderOptions);

  return (
    <h2 className={styles.component}>Total
      <strong>{formatPrice(calculateTotal(tripCost, orderOptions))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  orderOptions: PropTypes.object,
};

export default OrderSummary;
