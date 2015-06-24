import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import massert from './massert';
import Navbar from '../src/Navbar';
import MenuItems from '../src/MenuItems';

const TestUtils = addons.TestUtils;

function item() {
    return {title: 'menu.item', href: '/action'};
}

describe('Navbar', () => {
    it('is a function', () => {
        assert.strictEqual(typeof Navbar, 'function');
    });

    it('declares a required menuItems array property', () => {
        assert.strictEqual(Navbar.propTypes.menuItems, React.PropTypes.array.isRequired);
    });

    describe('HTML', () => {
        let component;
        let element;

        beforeEach(() => {
            component = TestUtils.renderIntoDocument(React.createElement(Navbar, {
                menuItems: [item()]
            }));

            element = component.getDOMNode();
        });

        it('is a <nav> tag', () => {
            assert.strictEqual(element.tagName, 'NAV');
        });

        describe('top classes', () => {
            it('include navbar', () => {
                massert.cssClass(element, 'navbar');
            });

            it('include navbar-default', () => {
                massert.cssClass(element, 'navbar-default');
            });
        });

        it('has fluid-container div as an immediate descendant', () => {
            assert.strictEqual(
                element.querySelector('div.container-fluid').parentElement,
                element
            );
        });

        it('displays the responsive hamburger header', () => {
            assert.strictEqual(element.querySelectorAll(
                '.container-fluid > .navbar-header > button.navbar-toggle > span.icon-bar'
            ).length, 3);
        });

        describe('navbar-toggle', () => {
            let buttonElement;

            beforeEach(() => {
                buttonElement = element.querySelector('button.navbar-toggle');
            });

            it('has the #react-navbar-collapse-all as the target', () => {
                assert.strictEqual(
                    buttonElement.getAttribute('data-target'), '#react-navbar-collapse-all');
            });
        });

        describe('the collapse-able container of menu items', () => {
            let containerElement;

            beforeEach(() => {
                containerElement = element.querySelector('div.container-fluid > div.collapse');
            });

            it('is displayed', () => {
                assert(containerElement);
            });

            it('additionally has the navbar-collapse CSS class assigned', () => {
                massert.cssClass(containerElement, 'navbar-collapse');
            });

            it('has the toggle target ID assigned', () => {
                assert.strictEqual(
                    containerElement.getAttribute('id'), 'react-navbar-collapse-all');
            });
        });

        describe('main menu items component instance', () => {
            it('gets the reference assigned', () => {
                assert.strictEqual(
                    element.querySelector('.navbar-nav').getAttribute('data-reactid'),
                    component.refs.menuItems.getDOMNode().getAttribute('data-reactid')
                );
            });

            it('is an instance of MenuItems', () => {
                assert(TestUtils.isCompositeComponentWithType(component.refs.menuItems, MenuItems));
            });

            it('gets the menuItems property of the parent named just "items"', () => {
                assert.deepEqual(component.refs.menuItems.props.items, component.props.menuItems);
            });
        });
    });
});
