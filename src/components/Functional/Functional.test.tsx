import React from 'react';
import {mount, shallow} from 'enzyme';
import FunctionalComponent, {UiComponent} from './Functional';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


test('Should display right value from the store', () => {
    const mockStore = configureStore()
    const initialState = {userSlice: {username: "Adil"}}
    const store = mockStore(initialState)
    const wrapper = mount(
        <Provider store={store}>
            <FunctionalComponent/>
        </Provider>
    );
    const description = wrapper.find("#description")
    expect(description.text()).toEqual(" I am a class component, my name is Adil ");
});

describe('Functional', () => {

    it('Should display props correctly', () => {
        const wrapper = shallow(
            <UiComponent username="Adil" handleClick={() => {
            }}/>
        );
        const description = wrapper.find("#description")
        expect(description.text()).toEqual(" I am a class component, my name is Adil ");
    });

    it('Should call handleClick after click on button', () => {
        const props = {username: "Adil", handleClick: jest.fn()}
        const wrapper = shallow(<UiComponent {...props}/>);
        const button = wrapper.find("button")
        button.simulate('click');
        expect(props.handleClick).toHaveBeenCalled();
    });

    it('Should render one div with correct props and one button with a handleclick', () => {
        const wrapper = shallow(
            <UiComponent username="Adil" handleClick={() => {
            }}/>
        );
        expect(wrapper.debug()).toMatchSnapshot()
    });
});


