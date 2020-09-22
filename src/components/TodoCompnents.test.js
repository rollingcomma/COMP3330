import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Form, FilterButton, Todo } from './TodoComponents';


describe('snapshot test for all components', ()=> {
  test('renders Form component ', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders FilterButton component', () => {
    const tree = renderer.create(<FilterButton />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('renders Todo component correctly in view template', () =>{
    const todo = {id: "todo-0", name: "Eat", completed: true }
    const tree = renderer.create(<Todo props={ todo }/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  
  describe('unit test for components', ()=>{

    test('input change in new list form', () => {
      const wrapper = mount(<Form />);
      wrapper.find('#new-todo-input').simulate('change', { target: { value: 'Read' } });
      expect(wrapper.find('#new-todo-input').prop('value')).toEqual('Read');
    })

  })

})
