import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

import settings from '../../../data/settings';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';


const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    tripName,
    tripId,
    countryCode,
    ...options,
    totalCost,
  };
  if (payload.name == '') {
    return;
  }
  if (payload.contact == '') {
    return;
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, name, id, countryCode, options, setOrderOption }) => {
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
      <Button onClick={() => sendOrder(options, tripCost, name, id, countryCode)}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  countryCode: PropTypes.string,
  tripCost: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
