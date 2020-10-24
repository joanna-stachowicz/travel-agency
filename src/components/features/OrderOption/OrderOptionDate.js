import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <DatePicker
    selected={currentValue == '' ? new Date() : currentValue}
    onChange={date => setOptionValue(date)}
  >
  </DatePicker>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;
