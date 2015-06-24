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

    describe('HTML', () => {
        let element;

        beforeEach(() => {
            element = TestUtils.renderIntoDocument(React.createElement(MenuItems)).getDOMNode();
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
    });
});
