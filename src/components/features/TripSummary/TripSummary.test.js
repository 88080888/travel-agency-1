import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () =>{

  it('should genarate proper URL address', () => {
    const expectedURL = 'abc';
    const component = shallow(<TripSummary id={expectedURL} tags={[]}/>);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedURL}`);
  });

  it('should render image (with proper src && alt) without crashing', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'image alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render name, cost and days props without crashing', () => {
    const expectedName = 'lorem';
    const expectedDays = 7;
    const expectedCost = '$99';
    const component = shallow(<TripSummary
      name={expectedName} days={expectedDays} cost={expectedCost} tags={[]}
    />);
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span:first-child').text();
    const renderedCost = component.find('.details span:last-child').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(`${expectedDays} days`);
    expect(renderedCost).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags without crashing', () => {
    const tags = ['first', 'second', 'third'];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tag').at(0)).toEqual[tags[0]];
    expect(component.find('.tag').at(1)).toEqual[tags[1]];
    expect(component.find('.tag').at(2)).toEqual[tags[2]];
  });

  it('should crash if tags is false', () => {
    const component = shallow(<TripSummary tags={[]}/>);
    expect(component.find('.tags')).toBeTruthy();
  });

});
