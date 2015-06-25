import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import Dropdown from '../src/Dropdown';

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
                title: 'leMenu.root.dd1',

                items: [
                    {title: 'leMenu.root.dd1.i1', href: '/action-1'},
                    {title: 'leMenu.root.dd1.i2', href: '/action-2'}
                ]
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

            it('nests the caret span', () => {
                assert(aElement.querySelector('span.caret'));
            });
        });
    });
});
