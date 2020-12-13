import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getDate();
  }
};

const checkDescriptionAtTime = (date, expectedTitle) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.title).text();
    expect(renderedDate).toEqual(expectedTitle);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtTime('2020-06-22', '');
  checkDescriptionAtTime('2020-06-21', '');
  checkDescriptionAtTime('2020-09-23', '');
  checkDescriptionAtTime('2020-06-20', '1 day to summer!');
  checkDescriptionAtTime('2020-09-24', '270 days to summer!');
  checkDescriptionAtTime('2021-01-01', '171 days to summer!');
  checkDescriptionAtTime('2020-12-31', '172 days to summer!');
});
