import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = (orderOptions) => {
  return (
    <h2 className={styles.component}>Total
      <strong>{formatPrice(calculateTotal(orderOptions.orderOptions.tripCost, orderOptions.orderOptions.options))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  orderOptions: PropTypes.object,
};

export default OrderSummary;
