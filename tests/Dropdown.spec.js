import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import Dropdown from '../src/Dropdown';
import Item from '../src/Item';

const TestUtils = addons.TestUtils;

describe('Dropdown', () => {
    it('is a function', () => {
        assert.strictEqual(typeof Dropdown, 'function');
    });

    it('declares the title required string property', () => {
        assert.strictEqual(Dropdown.propTypes.title, React.PropTypes.string.isRequired);
    });

    it('declares the required array property "items"', () => {
        assert.strictEqual(Dropdown.propTypes.items, React.PropTypes.array.isRequired);
    });

    describe('HTML', () => {
        let component;
        let element;

        beforeEach(() => {
            component = TestUtils.renderIntoDocument(React.createElement(Dropdown, {
                title: 'leMenu.root.dd1Title',

                items: [
                    {title: 'leMenu.root.dd1.i1', href: '/action-1'},
                    {title: 'leMenu.root.dd1.i2', href: '/action-2'}
                ],

                messages: {
                    leMenu: {
                        root: {
                            dd1Title: 'Drop-down-1',
                            dd1: {i1: 'Item-1', i2: 'Item-2'}
                        }
                    }
                }
            }));

            element = component.getDOMNode();
        });

        it('is an <li>', () => {
            assert.strictEqual(element.tagName, 'LI');
        });

        it('has the "dropdown" CSS class', () => {
            assert.strictEqual(element.className, 'dropdown');
        });

        describe('dropdown-toggle anchor', () => {
            let aElement;

            beforeEach(() => {
                aElement = element.querySelector('a.dropdown-toggle');
            });

            it('has the "#" href', () => {
                assert.strictEqual(aElement.getAttribute('href'), '#');
            });

            it('nests the title translation', () => {
                assert.strictEqual(aElement.textContent, 'Drop-down-1');
            });

            it('nests the caret span', () => {
                assert(aElement.querySelector('span.caret'));
            });
        });

        describe('items container', () => {
            let ulElement;

            beforeEach(() => {
                ulElement = element.querySelector('.dropdown-menu');
            });

            it('is a <ul>', () => {
                assert.strictEqual(ulElement.tagName, 'UL');
            });

            it('renders a li for each item', () => {
                assert.strictEqual(ulElement.querySelectorAll('li').length, 2);
            });

            it('assigns a ref to the last item', () => {
                assert.strictEqual(
                    ulElement.querySelectorAll('li')[1].getAttribute('data-reactid'),
                    component.refs.i1.getDOMNode().getAttribute('data-reactid')
                );
            });

            it('nests an Item instance as the first item', () => {
                assert(TestUtils.isCompositeComponentWithType(component.refs.i0, Item));
            });
        });
    });
});
