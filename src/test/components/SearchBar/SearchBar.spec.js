import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { SearchBar } from 'components/SearchBar'

spy(SearchBar.prototype, 'componentDidMount')

describe('<SearchBar />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<SearchBar routing={{pathname: '/'}}/>);
    expect(SearchBar.prototype.componentDidMount.calledOnce).to.equal(true);
  });
})
