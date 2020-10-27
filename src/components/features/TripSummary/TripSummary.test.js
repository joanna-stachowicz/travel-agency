import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct address', () => {
    const tags = [''];
    const providedId = 'abc';
    const expectedAddress = `/trip/${providedId}`;
    const component = shallow(<TripSummary tags={tags} id={providedId} />);

    expect(component.find('.link').prop('to')).toEqual(expectedAddress);
  });

  it('should render correct source and alternative', () => {
    const tags = [''];
    const expectedSrc = 'Lorem';
    const expectedAlt = 'Ipsum';
    const component = shallow(<TripSummary tags={tags} image={expectedSrc} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days props', () => {
    const tags = [''];
    const expectedName = 'Lorem';
    const providedCost = '$50';
    const expectedCost = 'from $50';
    const providedDays = 123;
    const expectedDays = '123 days';
    const component = shallow(<TripSummary tags={tags} name={expectedName} cost={providedCost} days={providedDays} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.cost').text()).toEqual(expectedCost);
    expect(component.find('.days').text()).toEqual(expectedDays);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct tag', () => {
    const tags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={tags} />);

    expect(component.find('.tag').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(tags[2]);
  });

  it('should not render tags div', () => {
    const tags = [];
    const component = shallow(<TripSummary tags={tags} />);

    expect(component.find('.tags').text()).toEqual('');
  });
});
