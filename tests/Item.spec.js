import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import Item from '../src/Item';

const TestUtils = addons.TestUtils;

describe('Item', () => {
    it('is a function', () => {
        assert.strictEqual(typeof Item, 'function');
    });

    it('declares the title required string property', () => {
        assert.strictEqual(Item.propTypes.title, React.PropTypes.string.isRequired);
    });

    it('declares the href required string property', () => {
        assert.strictEqual(Item.propTypes.href, React.PropTypes.string.isRequired);
    });

    describe('HTML', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(Item, {
                title: 'menu.nunu',
                href: '#/actions/nunu',

                messages: {
                    menu: {nunu: 'Nü-nü'}
                }
            })).getDOMNode();
        });

        it('is an <li>', () => {
            assert.strictEqual(element.tagName, 'LI');
        });

        describe('nested anchor', () => {
            let aElement;

            beforeEach(() => {
                aElement = element.querySelector('a');
            });

            it('is an immediate descendant', () => {
                assert.strictEqual(aElement.parentElement, element);
            });

            it('has the href attribute set to the href prop value', () => {
                assert.strictEqual(aElement.getAttribute('href'), '#/actions/nunu');
            });

            it('nests the localized title prop as the inner text', () => {
                assert.strictEqual(aElement.textContent, 'Nü-nü');
            });
        });
    });
});
