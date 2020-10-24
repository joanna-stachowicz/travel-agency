import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  console.log(options);
  return (
    <Row>
      <Col md={4}>
        {pricing.map(({ id, ...pricingProps }) => (
          <OrderOption
            key={id}
            id={id}
            currentValue={options[id]}
            setOrderOption={setOrderOption}
            tripCost={tripCost}
            {...pricingProps} />
        ))}
      </Col>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} orderOptions={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
