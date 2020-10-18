import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (options) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary orderOptions={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
};

export default OrderForm;
