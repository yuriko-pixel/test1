import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders learn react link', () => {
  const wrapper = shallow(<App/>);
});
