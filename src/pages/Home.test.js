import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';
import { Todo } from "../components/TodoComponents";

const Data = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

describe('unit test App', () => {
  test('renders App without task', () => {
      mount(<Home />);
  })
  
  const wrapper = mount(<Home tasks={Data} />);;

  test('renders App with 3 todo list', () => {
    expect(wrapper.find(Todo).length).toEqual(3);
  })

  test('add new list', () => {
    wrapper.find('#new-todo-input').simulate('change', { target: { value: 'Read' } });
    wrapper.find('form').at(0).simulate('submit');
    expect(wrapper.find(Todo).length).toEqual(4);
    
  })

  test('delete list', () => {
    //add one
    wrapper.find('.btn_dlt').at(0).simulate('click');
    expect(wrapper.find(Todo).length).toEqual(3);
  })

})
