import assert from 'assert';
import React from 'react';
import {addons} from 'react/addons';
import massert from './massert';
import MenuItems from '../src/MenuItems';

const TestUtils = addons.TestUtils;

describe('MenuItems', () => {
    it('is a function', () => {
        assert.strictEqual(typeof MenuItems, 'function');
    });

    it('declares a required "items" array property', () => {
        assert.strictEqual(MenuItems.propTypes.items, React.PropTypes.array.isRequired);
    });

    it('declares an optional "secondary" bool property', () => {
        assert.strictEqual(MenuItems.propTypes.secondary, React.PropTypes.bool);
    });

    describe('HTML', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(MenuItems, {
                items: []
            })).getDOMNode();
        });

        it('is a <ul>', () => {
            assert.strictEqual(element.tagName, 'UL');
        });

        it('has the top-level CSS class nav assigned', () => {
            massert.cssClass(element, 'nav');
        });

        it('has the top-level CSS class navbar-nav assigned', () => {
            massert.cssClass(element, 'navbar-nav');
        });

        it('has no top-level CSS class navbar-righ assigned', () => {
            massert.noCssClass(element, 'navbar-right');
        });
    });

    describe('HTML for "secondary" case', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(MenuItems, {
                items: [],
                secondary: true
            })).getDOMNode();
        });

        it('has the top-level CSS class navbar-righ assigned', () => {
            massert.cssClass(element, 'navbar-right');
        });
    });
});
